import { motion } from "framer-motion";

export default function Hero({ t, title, subtitle }) {
  return (
    <div
      className="brand-hero relative isolate max-w-7xl mx-auto mt-1 px-6 py-6 sm:py-8 text-center overflow-hidden rounded-b-[1.75rem] border"
      style={{
        background: "linear-gradient(135deg, #233D29 0%, #36563A 100%)",
        borderColor: "rgba(241,236,217,0.22)",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -z-10 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(120,152,121,0.28)", top: "-8rem", right: "10%" }}
        animate={{ x: [0, 16, 0], y: [0, 10, 0], opacity: [0.55, 0.82, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-3"
        style={{ color: "#FBF8EB", backgroundColor: "rgba(241,236,217,0.11)", border: "1px solid rgba(241,236,217,0.22)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#789879" }} />
        {t.hero.eyebrow}
      </motion.p>
      <motion.h1
        key={title}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="font-black leading-none mb-2"
        style={{ color: "#FBF8EB", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-1px" }}
      >
        {title}
      </motion.h1>
      <motion.p
        key={subtitle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="text-sm font-medium"
        style={{ color: "#DCD4BA" }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
