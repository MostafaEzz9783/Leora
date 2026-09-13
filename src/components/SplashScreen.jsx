import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DISPLAY_DURATION_MS = 1800;
const REDUCED_DISPLAY_DURATION_MS = 350;

export default function SplashScreen({ text, brandAlt, onDone }) {
  const prefersReducedMotion = useReducedMotion();
  const displayDuration = prefersReducedMotion ? REDUCED_DISPLAY_DURATION_MS : DISPLAY_DURATION_MS;

  useEffect(() => {
    const timer = setTimeout(onDone, displayDuration);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayDuration]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
      style={{
        backgroundColor: "#F1ECD9",
        backgroundImage: "radial-gradient(circle at 50% 44%, rgba(120, 152, 121, 0.20), transparent 32%), linear-gradient(rgba(35, 61, 41, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(35, 61, 41, 0.035) 1px, transparent 1px)",
        backgroundSize: "auto, 28px 28px, 28px 28px",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.15 : 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85, y: -18 }}
        transition={{ duration: prefersReducedMotion ? 0.15 : 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute rounded-full blur-3xl pointer-events-none"
            style={{ width: 280, height: 280, backgroundColor: "rgba(120, 152, 121, 0.30)" }}
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {/* Soft light backing plate behind the square Madinum logo. */}
        <div
          aria-hidden="true"
          className="absolute rounded-2xl pointer-events-none"
          style={{
            width: 196,
            height: 196,
            backgroundColor: "#FFFDF6",
            boxShadow: "0 20px 50px rgba(35, 61, 41, 0.16), 0 0 0 1px rgba(35, 61, 41, 0.12)",
          }}
        />
        <img
          src="/madinum-logo.jpeg"
          alt={brandAlt}
          className="relative w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-xl"
        />
      </motion.div>

      <motion.p
        className="mt-10 text-sm font-medium tracking-wide text-center"
        style={{ color: "#426449" }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.35, duration: prefersReducedMotion ? 0.15 : 0.4 }}
      >
        {text}
      </motion.p>

      <div
        className="mt-7 w-40 max-w-[50vw] h-[3px] rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(35, 61, 41, 0.13)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #233D29, #789879)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: displayDuration / 1000, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
