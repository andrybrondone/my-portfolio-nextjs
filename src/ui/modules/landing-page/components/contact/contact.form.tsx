import { FormsType } from "@/types/forms";
import { DarkModeContext } from "@/ui/components/darkMode/DarkModeGlobal";
import { Button } from "@/ui/design-system/button/Button";
import { Input } from "@/ui/design-system/forms/Input";
import { Textarea } from "@/ui/design-system/forms/Textarea";
import clsx from "clsx";
import { useContext } from "react";

interface Props {
  form: FormsType;
}

export const ContactForm = ({ form }: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("pt-8 pb-5 space-y-4", isDarkMode && "dark")}
    >
      <div className="flex justify-between">
        <Input
          isLoading={isLoading}
          placeholder="Full Name *"
          register={register}
          errors={errors}
          errorMsg="Champ obligatoire"
          id="email"
        />
        <Input
          isLoading={isLoading}
          placeholder="Your email address *"
          type="email"
          register={register}
          errors={errors}
          errorMsg="Champ obligatoire"
          id="email"
        />
      </div>
      <Input
        isLoading={isLoading}
        placeholder="Object *"
        register={register}
        errors={errors}
        errorMsg="Champ obligatoire"
        id="object"
      />
      <Textarea
        isLoading={isLoading}
        placeholder="Message *"
        register={register}
        errors={errors}
        errorMsg="Champ obligatoire"
        id="subject"
      />
      <Button
        isLoading={isLoading}
        type="submit"
        variant="disabled"
        fullWith
        disabled
      >
        Send
      </Button>
    </form>
  );
};
