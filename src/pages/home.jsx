import { Banner } from "./banner";
import { Div } from "@/components/primitives/div";
import { Legals } from "@/pages/legals";
import { Logo } from "@/pages/logo";
import { Socials } from "@/pages/socials";
import { Solutions } from "@/pages/solutions";

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
          "@bp1max": {
            display: "none",
          },
          "@bp1min": {
            backgroundImage: `url(/images/circuit-board.svg)`,
          },
        }}
      />
      <Div
        css={{
          widdth: "100vw",
        }}
      >
        <Logo />
        <Banner />
        <Solutions />
        <Socials />
        <Legals />
      </Div>
    </>
  );
};
