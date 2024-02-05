import { FormsType } from "@/types/forms";
import { Container } from "@/ui/components/container/Container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/Typography";
import { ContactForm } from "./contact.form";

interface Props {
  form: FormsType;
}

export const ContactView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-20">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          {/* <Image
            fill
            src="/assets/images/christmas.png"
            alt="Illustration ..."
            className=" object-scale-down"
          /> */}
        </div>
      </div>
      <div className="flex items-center">
        <Box>
          <Typography variant="h5" component="h1" className=" text-center">
            Contact
          </Typography>

          <ContactForm form={form} />
        </Box>
      </div>
    </Container>
  );
};
