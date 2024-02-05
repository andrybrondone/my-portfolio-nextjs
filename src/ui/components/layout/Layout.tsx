import { Footer } from "../navigation/Footer";
import { Navigation } from "../navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
