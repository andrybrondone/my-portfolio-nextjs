import clsx from "clsx";
import { Typography } from "../typography/Typography";
import { DarkModeContext } from "@/ui/components/darkMode/DarkModeGlobal";
import { useContext } from "react";

interface Props {
  isLoading: boolean;
  placeholder: string;
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean;
}

export const Textarea = ({
  isLoading,
  placeholder,
  register,
  errors,
  errorMsg = "Ce champ doit être renseigner",
  id,
  required = true,
  isAutocompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      <textarea
        rows="4"
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger border-alert-danger"
            : " placeholder-gray-700 border-gray-400 dark:placeholder-primary-300 dark:border-gray-800",
          "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-secondary dark:text-primary-200 dark:focus:ring-dark-secondary dark:bg-gray-800"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      ></textarea>

      {errors[id] && (
        <Typography variant="caption4" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
