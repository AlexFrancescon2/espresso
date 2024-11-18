import { Card } from "@/components/primitives/card";
import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { scrollToSection } from "@/components/shared/footer/footer";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Solutions = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        zindex={4}
        backgroundColor="secondaryBlurred"
        id="solutions"
        hasShadow
        isFullscreen
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

        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ marginTop: "$40", marginBottom: "$40" }}
        >
          <Div
            css={scroller}
            isFlex
            isJustifyCenter
            isAlignCenter
            onClick={() => scrollToSection("socials")}
          >
            <Div css={ArrowDownIconStyle} isFlex isJustifyCenter isAlignCenter>
              <img src={`/images/icons/bottom.png`} width={60}></img>
            </Div>
            <Text>{translations["solutions.ending"]}</Text>
          </Div>
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

const scroller = {
  flexDirection: "column",
  padding: "$36   ",
  backgroundColor: "$white",
  borderRadius: "$8",
  position: "relative",
  cursor: "pointer",
};

const ArrowDownIconStyle = {
  position: "absolute",
  backgroundColor: "$white",
  border: "2px solid $white",
  borderRadius: "$pill",
  bottom: "-30px",
  width: " 60px",
  height: "60px",
  cursor: "pointer",
};
