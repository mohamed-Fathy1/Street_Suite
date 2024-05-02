interface ButtonPrimaryProps {
  px?: string;
  py?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

function ButtonPrimary({
  px = "6px",
  py = "2px",
  size = "md",
  children,
}: ButtonPrimaryProps) {
  return (
    <button
      style={{
        padding: `${py} ${px}`,
        fontSize:
          size === "xs"
            ? "0.5rem"
            : size === "sm"
            ? "0.75rem"
            : size === "md"
            ? "1rem"
            : size === "lg"
            ? "1.25rem"
            : "1.5rem",
      }}
      className="text-white font-bold bg-blue-500 rounded-md w-fit focus:outline-none box-border border-0 cursor-pointer hover:bg-blue-600 transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
