interface HeaderTitleProps {
  color: string;
  sideColor: string;
  children: React.ReactNode;
}

function HeaderTitle({ color, sideColor, children }: HeaderTitleProps) {
  return (
    <h1
      style={{ color: color }}
      className="text-white h-fit relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold pl-3 after:content-[''] after:block after:w-1 after:h-full after:bg-blue-500 after:absolute after:top-0 after:left-0 after:rounded-3xl"
    >
      {children}
    </h1>
  );
}

export default HeaderTitle;
