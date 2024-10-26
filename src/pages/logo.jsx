import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";

// import { useLanguage } from "@/assets/translations/languageProvider";

export const Logo = () => {
  // const { translations } = useLanguage();

  return (
    <>
      <Section backgroundImage="bg1" zindex={5} backgroundColor="secondary">
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ width: "100%", height: "100%" }}
        >
          <img src="src/assets/images/logo.png" width={200} />
        </Div>
      </Section>
    </>
  );
};
