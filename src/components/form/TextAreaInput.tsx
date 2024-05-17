"use client";
const TextAreaInput: React.FC<{
  label: string;
  name: string;
  register: any;
  errors: any;
  isRequired?: boolean;

  className?: string;
}> = ({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2",
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block dark:text-slate-50 w-full rounded-md border-0 px-3 py-1.5 bg-transparent text-slate-900 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          defaultValue={""}
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
};

export default TextAreaInput;
