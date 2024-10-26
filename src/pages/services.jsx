// import { Div } from "@/components/primitives/div";

import { Card } from "@/components/primitives/card";
import { Div } from "@/components/primitives/div";
import { FaCog } from "react-icons/fa";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Services = () => {
  const { translations } = useLanguage();
  console.log({ translations });

  return (
    <>
      <Section backgroundImage="bg2" zindex={4} backgroundColor="primary">
        <Text size="xlarge" center>
          {translations["services.title"]}
        </Text>
        <Div isFlex css={{ gap: "$20" }}>
          <Card
            icon={FaCog}
            title={translations["services.service_1_title"]}
            description={translations["services.service_1_description"]}
          />
          <Card
            icon={FaCog}
            title={translations["services.service_2_title"]}
            description={translations["services.service_2_description"]}
          />
          <Card
            icon={FaCog}
            title={translations["services.service_3_title"]}
            description={translations["services.service_3_description"]}
          />
          <Card
            icon={FaCog}
            title={translations["services.service_4_title"]}
            description={translations["services.service_4_description"]}
          />
        </Div>
      </Section>
    </>
  );
};
