export default function FloatingPanel({ children, className = "", as: Component = "div", ...rest }) {
  return (
    <Component
      className={`rounded-xl backdrop-blur-xl ${className}`}
      style={{
        backgroundColor: "rgba(41,70,46,0.96)",
        border: "1px solid rgba(241,236,217,0.2)",
        boxShadow: "0 10px 24px -14px rgba(35,61,41,0.35)",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
