import { Div } from "@/components/primitives/div";
import { Logo } from "@/pages/logo";
import { Services } from "@/pages/services";
import { Socials } from "./socials";

export const Home = () => {
  return (
    <Div css={{ widdth: "100vw" }}>
      <Logo />
      <Services />
      <Socials />
    </Div>
  );
};
