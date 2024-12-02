import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { motion } from "framer-motion";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Certificates = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section zindex={1} backgroundColor="secondaryBlurred" id="banner">
        <Div isFlex isJustifyCenter isAlignCenter css={containerStyle}>
          <Div isFlex isJustifyCenter isAlignCenter>
            <Text variant="title" center>
              {translations["certifications.title"]}
            </Text>
          </Div>
          <Div
            isFlex
            isJustifyCenter
            isAlignCenter
            css={{ marginBottom: "$76" }}
          >
            <Text variant="subtitle" center>
              {translations["certifications.subtitle"]}
            </Text>
          </Div>
        </Div>
        <Div isFlex css={wrapperStyle}>
          <Div css={contentStyle}>
            <Text
              variant="subtitle"
              center
              isBold
              css={{ marginBottom: "$20" }}
            >
              {translations["certifications.subtitle_1"]}
            </Text>
            <Div isFlex isJustifyCenter isAlignCenter>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Div isFlex isJustifyCenter isAlignCenter css={contentStyle}>
                  <img src={`/images/certs/channable.png`} width={150} />
                </Div>
              </motion.div>
            </Div>
          </Div>
          <Div css={contentStyle}>
            <Text
              variant="subtitle"
              center
              isBold
              css={{ marginBottom: "$20" }}
            >
              {translations["certifications.subtitle_2"]}
            </Text>
            <Div isFlex isJustifyCenter isAlignCenter>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Div isFlex isJustifyCenter isAlignCenter css={contentStyle}>
                  <img src={`/images/certs/azure.png`} width={200} />
                </Div>
              </motion.div>
            </Div>
          </Div>
        </Div>
      </Section>
    </>
  );
};

const wrapperStyle = {
  flexWrap: "wrap",
  "@bp2max": {
    width: "100%",
    gap: "$40",
  },
};

const contentStyle = {
  flexDirection: "column",
  width: "50%",
  flexWrap: "wrap",
  alignSelf: "stretch",
  "@bp2max": {
    width: "100%",
  },
};

const containerStyle = {
  flexDirection: "column",
  padding: "$20 0",
  "@bp4min": {
    padding: "$20 8vw",
  },
};
