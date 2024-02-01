import { Footer } from "@/ui/components/navigation/Footer";
import { Navigation } from "@/ui/components/navigation/Navigation";
import { Seo } from "@/ui/components/seo/Seo";
//import { Typography } from '@/ui/design-system/typography/Typography'

export default function Home() {
  return (
    <>
      <Seo title="App nextjs" description="Descriptions..."></Seo>

      <Navigation />

      <Footer />
    </>
  );
}
