import { Seo } from "@/ui/components/Seo";
//import { Typography } from '@/ui/design-system/typography/Typography'
import { Button } from "@/ui/design-system/button/Button";
import { Spinner } from "@/ui/design-system/spinner/Spinner";

export default function Home() {
  return (
    <>
      <Seo title="App nextjs" description="Descriptions..."></Seo>
      <div className="flex items-center gap-4 p-10">
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button isLoading size="small">
          Accent
        </Button>
        <Button isLoading size="small" variant="secondary">
          secondary
        </Button>
        <Button isLoading size="small" variant="outline">
          outline
        </Button>
        <Button isLoading size="small" variant="disabled" disabled>
          disabled
        </Button>
        {/* <Button isLoading size="small" variant="ico" icon={{icon: NomIcon}} />
        <Button isLoading size="small" variant="ico" icon={{icon: NomIcon}} iconPosition="left">Accent</Button>
        <Button isLoading size="small" variant="ico" icon={{icon: NomIcon}}>Accent</Button> */}
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">
          secondary
        </Button>
        <Button size="small" variant="outline">
          outline
        </Button>
        <Button size="small" variant="disabled" disabled>
          disabled
        </Button>
        {/* <Button size="small" variant="ico" icon={{icon: NomIcon}} />
        <Button size="small" variant="ico" icon={{icon: NomIcon}} iconPosition="left">Accent</Button>
        <Button size="small" variant="ico" icon={{icon: NomIcon}}>Accent</Button> */}
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button>Salut</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="disabled" disabled>
          disabled
        </Button>
        {/* <Button variant="ico" icon={{icon: NomIcon}} /> */}
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">Salut</Button>
        <Button size="large" variant="secondary">
          secondary
        </Button>
        <Button size="large" variant="outline">
          outline
        </Button>
        <Button size="large" variant="disabled" disabled>
          disabled
        </Button>
        {/* <Button size="large" variant="ico" icon={{icon: NomIcon}} /> */}
      </div>
      {/* <div className="space-y-5">
        <Typography variant="display" component="div">
          coders Monkeys
        </Typography>
        <Typography theme="primary" variant="h1" component="div">
        Coders Monkeys
        </Typography>
        <Typography variant="lead" component="div">
        coders Monkeys
        </Typography>
        <Typography variant="body-sm" component="div">
        coders Monkeys
        </Typography>
        <Typography variant="caption4" component="div">
        coders Monkeys
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
        coders Monkeys
        </Typography>
      </div> */}
    </>
  );
}
