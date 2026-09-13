export default function FloatingBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden -z-10" style={{ opacity: 0.7 }}>
      <div className="absolute top-0 left-0 right-0 h-12" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(41,70,46,.16) 0 18px, transparent 18px 28px)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(41,70,46,.14) 0 18px, transparent 18px 28px)" }} />
    </div>
  );
}
