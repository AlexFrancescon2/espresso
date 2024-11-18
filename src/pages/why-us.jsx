import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { motion } from "framer-motion";
import { useLanguage } from "@/assets/translations/languageProvider";

export const WhyUs = () => {
  const { translations } = useLanguage();

  return (
    <Section
      zindex={3}
      backgroundColor="primaryBlurred"
      id="whyus"
      isFullscreen
      hasShadow
    >
      <Div isFlex isJustifyCenter isAlignCenter>
        <Text variant="title" center>
          {translations["why-us.title"]}
        </Text>
      </Div>
      <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$64" }}>
        <Text variant="subtitle" center>
          {translations["why-us.subtitle"]}
        </Text>
      </Div>
      <Div isFlex isJustifyCenter>
        <Div css={cardContainerStyle}>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
          >
            <Item
              imageSrc={"/images/icons/research.png"}
              title={translations["why-us.service_1_title"]}
              description={translations["why-us.service_1_description"]}
              isLeftAligned
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
          >
            <Item
              imageSrc={"/images/icons/innovation.png"}
              title={translations["why-us.service_2_title"]}
              description={translations["why-us.service_2_description"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
          >
            <Item
              imageSrc={"/images/icons/ruler.png"}
              title={translations["why-us.service_3_title"]}
              description={translations["why-us.service_3_description"]}
              isLeftAligned
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
          >
            <Item
              imageSrc={"/images/icons/customer-review.png"}
              title={translations["why-us.service_4_title"]}
              description={translations["why-us.service_4_description"]}
            />
          </motion.div>
        </Div>
      </Div>

      <Div isFlex isJustifyCenter isAlignCenter css={{ marginTop: "$40" }}>
        <Text center color="grey" css={{ fontSize: "$35" }}>
          {translations["why-us.ending"]}
        </Text>
      </Div>
    </Section>
  );
};

const cardContainerStyle = {
  width: "100%",
  "@bp3min": {
    width: "60vw",
  },
  "@bp4min": {
    width: "40vw",
  },
};

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
  borderRadius: "$12",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "$20",
  display: "flex",
  boxShadow: "10px 10px 20px -14px rgba(0, 0, 0, 1.0)",
  "&:hover": {
    boxShadow: "12px 12px 22px -14px rgba(0, 0, 0, 1.0)",
  },
};
