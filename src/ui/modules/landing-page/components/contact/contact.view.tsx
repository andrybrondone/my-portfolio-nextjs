import { FormsType } from "@/types/forms";
import { Container } from "@/ui/components/container/Container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiAtLine, RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { ContactForm } from "./contact.form";

interface Props {
  form: FormsType;
}

interface ContactProps {
  icon: React.ReactElement;
  description: string;
  link: string;
}

const contactData: ContactProps[] = [
  {
    icon: <RiMessengerLine />,
    description: "Bron Don",
    link: "/",
  },
  {
    icon: <RiWhatsappLine />,
    description: "+261 34 91 572 36",
    link: "/",
  },
  {
    icon: <RiAtLine />,
    description: "andry.brondone@gmail.com",
    link: "/",
  },
];

export const ContactView = ({ form }: Props) => {
  const contactLst = contactData.map((contact) => (
    <Link key={uuidv4()} href={contact.link}>
      <Box
        className="flex flex-col items-center gap-1 bg-white border  rounded my-2 shadow animate hover:translate-x-2"
        padding_y="py-2"
      >
        <div className=" text-4xl text-secondary">{contact.icon}</div>
        <Typography variant="body-sm" component="h3" weight="medium">
          {contact.description}
        </Typography>
      </Box>
    </Link>
  ));

  return (
    <Container className="grid grid-cols-2 gap-10 mb-20">
      <div className="flex items-center" id="projet">
        <div className="relative w-96 h-[531px] flex flex-col justify-end left-24">
          <Image
            src="/assets/images/phone.png"
            alt="contact"
            width={400}
            height={300}
            className="mb-4"
          />
          {contactLst}
        </div>
      </div>
      <div className="flex items-center relative right-24">
        <Box>
          <Typography variant="h5" component="h1" className=" text-center">
            Pour me contacter
          </Typography>

          <ContactForm form={form} />
        </Box>
      </div>
    </Container>
  );
};
