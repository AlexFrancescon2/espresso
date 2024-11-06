// import { Div } from "@/components/primitives/div";

import { Card } from "@/components/primitives/card";
import { Div } from "@/components/primitives/div";
import { FaCog } from "react-icons/fa";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Services = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        backgroundImage="bg2"
        zindex={4}
        backgroundColor="primary"
        id="services"
      >
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$28" }}>
          <Text size="xlarge" center>
            {translations["services.title"]}
          </Text>
        </Div>

        <Div isFlex css={cardContainerStyle} isAlignCenter isJustifyCenter>
          <Card
            imageSrc={`src/assets/images/icons/shopping-online.png`}
            title={translations["services.service_1_title"]}
            description={translations["services.service_1_description"]}
            css={cardStyle}
          />
          <Card
            imageSrc={`src/assets/images/icons/server.png`}
            title={translations["services.service_2_title"]}
            description={translations["services.service_2_description"]}
            css={cardStyle}
          />
          <Card
            imageSrc={`src/assets/images/icons/analysis.png`}
            title={translations["services.service_3_title"]}
            description={translations["services.service_3_description"]}
            css={cardStyle}
          />
          <Card
            imageSrc={`src/assets/images/icons/ai.png`}
            title={translations["services.service_4_title"]}
            description={translations["services.service_4_description"]}
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
