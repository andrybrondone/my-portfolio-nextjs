import { Button } from "@/ui/design-system/button/Button";
import { Input } from "@/ui/design-system/forms/Input";
import { Textarea } from "@/ui/design-system/forms/Textarea";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

interface FormContactProps {
  name: string;
  email: string;
  subject: string;
  content: string;
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

const initialValues: FormContactProps = {
  name: "",
  email: "",
  subject: "",
  content: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Un nom doit contenir au moins 3 caractères")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .required("Ce champ est obligatoire")
    .matches(emailRegex, "Veuillez entrer une adresse e-mail valide"),
  subject: Yup.string()
    .min(4, "Une adresse doit contenir au moins 4 caractères")
    .required("Ce champ est obligatoire"),
  content: Yup.string()
    .min(4, "Une ville doit contenir au moins 4 caractères")
    .required("Ce champ est obligatoire"),
});

export const ContactForm = () => {
  const onSubmit = (
    data: FormContactProps,
    actions: FormikHelpers<FormContactProps>
  ) => {
    axios
      .post("https://send-email-api-nodejs.onrender.com/api/send-email", data)
      .then(() => {
        toast.success("L'e-mail à bien été envoyé");
        actions.resetForm();
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 500" ||
          error.message === "Network Error"
        ) {
          toast.error("Veuillez vérifier votre connexion Internet !");
        } else {
          console.error("Error : ", error);
        }
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="pt-8 pb-5 space-y-4">
            <div className="flex justify-center gap-2 ">
              <Input name="name" type="text" placeholder="Full name *" />
              <Input
                name="email"
                type="email"
                placeholder="Your email address *"
              />
            </div>
            <Input name="subject" type="text" placeholder="Subject *" />
            <Textarea name="content" type="text" placeholder="Content *" />

            <div className="flex justify-center items-center ">
              <Button
                isLoading={isSubmitting}
                type="submit"
                className="rounded-[200px] w-32"
              >
                Send
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
