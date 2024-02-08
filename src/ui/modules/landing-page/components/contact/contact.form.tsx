import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/Button";
import { Input } from "@/ui/design-system/forms/Input";
import { Textarea } from "@/ui/design-system/forms/Textarea";

interface Props {
  form: FormsType;
}

export const ContactForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="Votre adresse e-mail"
        type="email"
        register={register}
        errors={errors}
        errorMsg="Champ obligatoire"
        id="email"
      />
      <Input
        isLoading={isLoading}
        placeholder="L'objet"
        register={register}
        errors={errors}
        errorMsg="Champ obligatoire"
        id="object"
      />
      <Textarea
        isLoading={isLoading}
        placeholder="Message"
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
        Envoyer
      </Button>
    </form>
  );
};
