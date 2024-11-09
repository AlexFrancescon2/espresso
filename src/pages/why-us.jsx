import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

const Item = ({ imageSrc, title, description }) => {
  return (
    <Div isFlex isAlignCenter isJustifyCenter css={cardStyle}>
      <Div css={{ marginBottom: "$8" }}>
        <img src={imageSrc} width={100}></img>
      </Div>
      <Text isBold isBlock css={{ marginBottom: "$8", fontSize: "$24" }}>
        {title}
      </Text>
      <Text center css={{ fontSize: "$14" }}>
        {description}
      </Text>
    </Div>
  );
};

const cardStyle = {
  marginBottom: "$60",
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.56)",
  borderRadius: "$12",
  padding: "$20",
  display: "flex",
  boxShadow: "10px 10px 20px -14px rgba(0, 0, 0, 1.0)",
  "&:hover": {
    boxShadow: "12px 12px 22px -14px rgba(0, 0, 0, 1.0)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
};

export const WhyUs = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        backgroundImage="bg1"
        zindex={4}
        backgroundColor="Secondary"
        id="why-us"
      >
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$64" }}>
          <Text size="xlarge" center isUnderlined>
            {translations["why-us.title"]}
          </Text>
        </Div>
        <Div isFlex isJustifyCenter>
          <Div css={cardContainerStyle}>
            <Item
              imageSrc={"src/assets/images/icons/research.png"}
              title={translations["why-us.service_1_title"]}
              description={translations["why-us.service_1_description"]}
              isLeftAligned
            />
            <Item
              imageSrc={"src/assets/images/icons/innovation.png"}
              title={translations["why-us.service_2_title"]}
              description={translations["why-us.service_2_description"]}
            />
            <Item
              imageSrc={"src/assets/images/icons/ruler.png"}
              title={translations["why-us.service_3_title"]}
              description={translations["why-us.service_3_description"]}
              isLeftAligned
            />
            <Item
              imageSrc={"src/assets/images/icons/customer-review.png"}
              title={translations["why-us.service_4_title"]}
              description={translations["why-us.service_4_description"]}
            />
          </Div>
        </Div>

        <Div isFlex isJustifyCenter isAlignCenter css={{ marginTop: "$40" }}>
          <Text center color="grey" css={{ fontSize: "$35" }}>
            {translations["why-us.ending"]}
          </Text>
        </Div>
      </Section>
    </>
  );
};

const cardContainerStyle = {
  width: "55vw",
  "@bp4min": {
    width: "40vw",
  },
};
