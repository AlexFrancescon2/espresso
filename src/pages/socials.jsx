import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";

// import { useLanguage } from "@/assets/translations/languageProvider";

export const Socials = () => {
  // const { translations } = useLanguage();

  return (
    <>
      <Section backgroundImage="bg1" zindex={3} backgroundColor="secondary">
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ width: "100%", height: "100%" }}
        >
          Socials
        </Div>
      </Section>
    </>
  );
};
