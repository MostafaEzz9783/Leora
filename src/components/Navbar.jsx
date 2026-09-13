import { Globe } from "lucide-react";
import FloatingPanel from "@/components/ui/FloatingPanel";
import ProjectSelector from "@/components/ProjectSelector";

export default function Navbar({ t, language, selectedProject, onProjectChange, onToggleLanguage }) {
  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6">
      <FloatingPanel className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-2.5">
        <div className="flex items-center gap-2 sm:gap-3">
          <ProjectSelector t={t} language={language} selectedProject={selectedProject} onProjectChange={onProjectChange} />
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCD4BA]"
            style={{ color: "#FBF8EB", backgroundColor: "rgba(241,236,217,0.12)" }}
          >
            <Globe size={13} />
            {t.nav.languageToggle}
          </button>
        </div>

        {/* Light backing keeps the square Madinum mark crisp on the dark nav. */}
        <div
          className="relative flex-shrink-0 flex items-center justify-center w-16 h-16 sm:w-[76px] sm:h-[76px] rounded-lg overflow-hidden"
          style={{ backgroundColor: "#FBF9F5", boxShadow: "0 8px 20px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          <img src="/madinum-logo.jpeg" alt={t.nav.brandAlt} className="relative w-full h-full object-contain" />
        </div>
      </FloatingPanel>
    </div>
  );
}
