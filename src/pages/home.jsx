import { Div } from "@/components/primitives/div";
import { Logo } from "@/pages/logo";
import { Socials } from "@/pages/socials";
import { Solutions } from "@/pages/solutions";
import { WhyUs } from "@/pages/why-us";

export const Home = () => {
  return (
    <Div css={{ widdth: "100vw" }}>
      <Logo />
      <Solutions />
      <WhyUs />
      <Socials />
    </Div>
  );
};
