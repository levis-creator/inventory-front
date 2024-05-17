type InputType =
  | "text"
  | "password"
  | "number"
  | "email"
  | "date"
  | "checkbox"
  | "radio"
  | "file"
  | "submit"
  | "button"
  | "color"
  | "range"
  | "hidden"
  | "image"
  | "tel"
  | "url"
  | "datetime-local";
type TextInputProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  isRequired?: boolean;
  type?: InputType;
  className?: string;
  defaultValue?: string;
};
const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) => {
  return (
    <div className={className}>
      {" "}
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          className="block w-full rounded-md border-0 p-3 dark:bg-transparent text-slate-800 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-slate-400  focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
};
export default TextInput;
