import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Socials = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        backgroundImage="bg1"
        zindex={3}
        backgroundColor="secondary"
        id="socials"
      >
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$28" }}>
          <Text size="xlarge" center>
            {translations["socials.title"]}
          </Text>
        </Div>
      </Section>
    </>
  );
};
