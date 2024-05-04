interface ButtonSecondaryProps {
  px?: string;
  py?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

function ButtonSecondary({
  px = "6px",
  py = "2px",
  size = "md",
  children,
}: ButtonSecondaryProps) {
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
      className="block lg:hidden text-white font-semibold bg-transparent border-2 border-white rounded-md w-fit focus:outline-none box-border cursor-pointer hover:bg-opacity-20 hover:bg-white transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
