import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { motion as motionTokens } from "@/lib/theme";

export default function GlassCard({
  children,
  className = "",
  glow = false,
  tilt = true,
  dark = true,
  as: Component = motion.div,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const enableTilt = tilt && !prefersReducedMotion;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [motionTokens.tiltMaxDeg, -motionTokens.tiltMaxDeg]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-motionTokens.tiltMaxDeg, motionTokens.tiltMaxDeg]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (event) => {
    if (!enableTilt || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Component
      ref={ref}
      className={`relative rounded-2xl border overflow-hidden ${className}`}
      style={{
        backgroundColor: dark ? "#FBF8EB" : "rgba(251,248,235,0.72)",
        borderColor: "rgba(35,61,41,0.16)",
        boxShadow: glow
          ? "0 22px 48px -26px rgba(35,61,41,0.28)"
          : "0 12px 28px -24px rgba(35,61,41,0.22)",
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? undefined : { y: motionTokens.hoverLift, scale: motionTokens.hoverScale }}
      transition={{ duration: motionTokens.duration.base, ease: "easeOut" }}
      {...rest}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(circle at 30% 0%, rgba(120,152,121,0.22), transparent 60%)" }}
        />
      )}
      <div className="relative" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </Component>
  );
}
