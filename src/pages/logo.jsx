import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { motion } from "framer-motion";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Logo = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        backgroundImage="bg-blob-1.png"
        zindex={5}
        backgroundColor="secondaryBlurred"
        id="logo"
        css={{ minHeight: "100vh" }}
      >
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ width: "100%", height: "100%", flexDirection: "column" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/logo.png" width={350} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Text css={titleStyle} isBold>
              Espresso
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Text css={{ fontSize: "2em" }} color="darkgrey">
              {translations["logo.subtitle"]}
            </Text>
          </motion.div>
        </Div>
      </Section>
    </>
  );
};

const titleStyle = { fontSize: "5em", "@bp1max": { fontSize: "4em" } };
