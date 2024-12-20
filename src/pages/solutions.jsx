import { Card } from "@/components/primitives/card";
import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Solutions = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        zindex={3}
        backgroundColor="secondaryBlurred"
        id="solutions"
        isFullscreen
        hasShadow
      >
        <Div isFlex isJustifyCenter isAlignCenter>
          <Text variant="title" center>
            {translations["solutions.title"]}
          </Text>
        </Div>
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$40" }}>
          <Text variant="subtitle" center>
            {translations["solutions.subtitle"]}
          </Text>
        </Div>

        <Div isFlex css={cardContainerStyle} isAlignCenter isJustifyCenter>
          <Card
            imageSrc={`/images/icons/shopping-online.png`}
            title={translations["solutions.service_1_title"]}
            description={translations["solutions.service_1_description"]}
            css={cardStyle}
          />
          <Card
            imageSrc={`/images/icons/server.png`}
            title={translations["solutions.service_2_title"]}
            description={translations["solutions.service_2_description"]}
            css={cardStyle}
          />
          <Card
            imageSrc={`/images/icons/analysis.png`}
            title={translations["solutions.service_3_title"]}
            description={translations["solutions.service_3_description"]}
            css={cardStyle}
          />
          <Card
            imageSrc={`/images/icons/ai.png`}
            title={translations["solutions.service_4_title"]}
            description={translations["solutions.service_4_description"]}
            css={cardStyle}
          />
        </Div>
      </Section>
    </>
  );
};

const cardContainerStyle = {
  gap: "$48",
  padding: "$20 0",
  flexWrap: "wrap",
  "@bp4min": {
    padding: "$20 8vw",
  },
};

const cardStyle = {
  width: "40%",
  alignSelf: "stretch",
  "@bp3max": {
    width: "100%",
  },
};
