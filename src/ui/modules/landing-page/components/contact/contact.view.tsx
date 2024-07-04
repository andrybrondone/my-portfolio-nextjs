import { Container } from "@/ui/components/container/Container";
import { Box } from "@/ui/design-system/box/box";
import { TexteSection } from "@/ui/design-system/text-section/TexteSection";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiAtLine, RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { ContactForm } from "./contact.form";

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

export const ContactView = () => {
  const contactLst = contactData.map((contact) => (
    <Link key={uuidv4()} href={contact.link}>
      <Box
        className="flex flex-col items-center gap-1 bg-white border dark:bg-gray-800 rounded my-2 shadow dark:shadow-gray-800 animate hover:-translate-y-0.5"
        padding_y="py-2"
      >
        <div className=" text-4xl text-secondary dark:text-dark-secondary">
          {contact.icon}
        </div>
        <Typography
          variant="body-sm"
          component="h3"
          weight="medium"
          className="dark:text-white"
        >
          {contact.description}
        </Typography>
      </Box>
    </Link>
  ));

  return (
    <>
      <TexteSection title="To Contact Me" />

      <Container
        className="flex justify-center items-center gap-8 py-20 max-md:flex-col max-md:gap-5"
        id="contact"
      >
        <div className="flex items-center">
          <div className=" w-96 max-lg:w-80 max-md:w-96 max-sm:w-full h-[531px] max-md:h-[500px]  max-sm:h-[240px] flex flex-col justify-end">
            <Image
              src="/assets/images/phone.png"
              alt="contact"
              width={400}
              height={300}
              className="mb-4 max-sm:hidden"
            />
            {contactLst}
          </div>
        </div>
        <div className="flex items-center">
          <Box className="max-[500px]:px-3">
            <Typography
              variant="h5"
              component="h1"
              className=" text-center dark:text-white"
            >
              To Send an e-mail
            </Typography>

            <ContactForm />
          </Box>
        </div>
      </Container>
    </>
  );
};
