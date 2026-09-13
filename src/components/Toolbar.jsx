import { memo, useState } from "react";
import { Expand, FileDown, Minimize } from "lucide-react";
import PremiumButton from "@/components/ui/PremiumButton";

function Toolbar({ t, isFullscreen, onToggleFullscreen, exportTargetRef, exportFileName }) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (!exportTargetRef.current) return;
    setIsExporting(true);

    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(exportTargetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#F1ECD9",
        windowWidth: exportTargetRef.current.scrollWidth,
        onclone: (documentClone) => {
          const exportStyles = documentClone.createElement("style");
          exportStyles.textContent = `
            *, *::before, *::after {
              animation: none !important;
              transition: none !important;
              caret-color: transparent !important;
            }
            html, body { background: #F1ECD9 !important; }
          `;
          documentClone.head.appendChild(exportStyles);
        },
      });

      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const imageWidth = pageWidth - margin * 2;
      const imageHeight = pageHeight - margin * 2;
      const sourceSliceHeight = Math.floor((imageHeight / imageWidth) * canvas.width);
      let sourceY = 0;
      let pageIndex = 0;

      // Render a full-width slice per page rather than shrinking the whole
      // dashboard into one A4 sheet. This preserves Arabic glyph sharpness,
      // chart labels, and the intended colour contrast.
      while (sourceY < canvas.height) {
        const sliceHeight = Math.min(sourceSliceHeight, canvas.height - sourceY);
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = sliceHeight;
        slice.getContext("2d").drawImage(canvas, 0, sourceY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

        if (pageIndex > 0) pdf.addPage();
        const renderedHeight = (sliceHeight / canvas.width) * imageWidth;
        pdf.addImage(slice.toDataURL("image/png"), "PNG", margin, margin, imageWidth, renderedHeight, undefined, "FAST");
        sourceY += sliceHeight;
        pageIndex += 1;
      }
      pdf.save(`${exportFileName ?? "Financial-Study"}.pdf`);
    } catch (error) {
      console.error("Failed to export PDF", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 mt-3 mb-5">
      <PremiumButton icon={FileDown} variant="ghost" disabled={isExporting} onClick={handleExport}>
        {isExporting ? t.toolbar.exportingPdf : t.toolbar.exportPdf}
      </PremiumButton>
      <PremiumButton icon={isFullscreen ? Minimize : Expand} variant="ghost" onClick={onToggleFullscreen}>
        {isFullscreen ? t.toolbar.exitFullscreen : t.toolbar.fullscreen}
      </PremiumButton>
    </div>
  );
}

export default memo(Toolbar);
