import "./RadioButtons.css";

interface RadioButtonsProps {
  children: React.ReactNode;
  group: string;
}

function RadioButtons({ children, group }: RadioButtonsProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name={group} className="hidden" />
      <div className="w-3 h-3 rounded-full border-4 border-neutral-500">
        <div className=" rounded-full bg-neutral-950"></div>
      </div>
      <span className="text-xs">{children}</span>
    </label>
  );
}

export default RadioButtons;
