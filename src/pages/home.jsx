import { Div } from "@/components/primitives/div";
import { Legals } from "@/pages/legals";
import { Logo } from "@/pages/logo";
import { Socials } from "@/pages/socials";
import { Solutions } from "@/pages/solutions";
import { WhyUs } from "@/pages/why-us";

export const Home = () => {
  return (
    <>
      <Div
        css={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-99",
          backgroundImage: `url(src/assets/images/circuit-board.svg)`,
        }}
      />
      <Div
        css={{
          widdth: "100vw",
        }}
      >
        <Logo />
        <Solutions />
        <WhyUs />
        <Socials />
        <Legals />
      </Div>
    </>
  );
};
