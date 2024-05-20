import { Plus } from "lucide-react";
import { ButtonHTMLAttributes, FC, ReactElement } from "react";
type ButtonType = "submit" | "button" | "reset";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  buttonTitle: string;
  loadTitle?: string;
  type?: ButtonType;
  icon?: ReactElement;
};

const Button: FC<ButtonProps> = ({
  isLoading,
  buttonTitle = false,
  loadTitle,
  type = "button",
  icon,
  ...props
}) => {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type={`${type}`}
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <Plus/>
          {loadTitle}
        </button>
      ) : (
        <button
          {...props}
          type={`${type}`}
          className="inline-flex items-center px-5 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          {icon ? icon : <Plus className="w-5 h-5 mr-2" />}
          <span>{buttonTitle}</span>
        </button>
      )}
    </div>
  );
};

export default Button;
