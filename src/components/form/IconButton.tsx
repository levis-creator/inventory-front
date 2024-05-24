import { FC, ReactElement } from "react";

type IconButtonProps = {
  icon: ReactElement;
  iconDescription: string;
  onClick?: () => void;
  className?: string;
};
const IconButton: FC<IconButtonProps> = ({
  icon,
  iconDescription,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} hover:bg-slate-100 dark:text-white bg-transparent dark:hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-transparent dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
    >
      {icon}
      <span className="sr-only">{iconDescription}</span>
    </button>
  );
};

export default IconButton;
