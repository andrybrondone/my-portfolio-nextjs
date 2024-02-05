import clsx from "clsx";
import { Typography } from "../typography/Typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "textarea" | "email";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean;
}

export const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Ce champ doit être renseigner",
  id,
  required = true,
  isAutocompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger border-alert-danger"
            : "placeholder-gray-600 border-gray-400",
          "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-secondary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typography variant="caption4" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
