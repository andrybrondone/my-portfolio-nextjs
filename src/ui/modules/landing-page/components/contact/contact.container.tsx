import { useToggle } from "@/hooks/useToggle";
import { ContactFormFielsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactView } from "./contact.view";

export const ContactContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ContactFormFielsType>();

  const onSubmit: SubmitHandler<ContactFormFielsType> = async (formData) => {
    console.log("formData", formData);
  };

  return (
    <>
      <Button action={toggle}>clik me</Button>
      <ContactView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
