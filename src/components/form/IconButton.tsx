import { FC, ReactElement } from "react";

type IconButtonProps = {
  icon: ReactElement;
  iconDescription: string;
  onClick?:()=>void
};
const IconButton: FC<IconButtonProps> = ({ icon, iconDescription, onClick }) => {
  return (
    <button
    onClick={onClick}
      type="button"
      className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      {icon}
      <span className="sr-only">{iconDescription}</span>
    </button>
  );
};

export default IconButton;
