import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { motion } from "framer-motion";
import { scrollToSection } from "@/components/shared/footer/footer";
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
          <img src="/images/logo.png" width={280} />

          <Text css={titleStyle} isBold isBlock>
            Espresso
          </Text>

          <Text
            isBlock
            css={{ fontSize: "2em", marginTop: "$16" }}
            color="darkgrey"
          >
            {translations["logo.subtitle"]}
          </Text>
        </Div>
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ flexDirection: "column", marginTop: "80px" }}
        >
          <Div isFlex isJustifyCenter isAlignCenter>
            <Text variant="title" center css={{ marginBottom: "$4" }}>
              {translations["banner.intro_1"]}
            </Text>
          </Div>
          <Div isFlex isJustifyCenter isAlignCenter>
            <Text
              variant="title"
              center
              css={{ marginBottom: "$8", textDecoration: "underline" }}
            >
              {translations["banner.intro_2"]}
            </Text>
          </Div>
          <Div
            isFlex
            isJustifyCenter
            isAlignCenter
            css={{ marginBottom: "$4" }}
          >
            <Text
              variant="subtitle"
              center
              isBlock
              css={{ marginBottom: "$4" }}
            >
              {translations["banner.ending"]}
            </Text>
          </Div>
          <motion.div
            animate={{ y: 8 }}
            transition={{
              type: "spring",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            <Div
              css={arrowDownIconStyle}
              isFlex
              isJustifyCenter
              isAlignCenter
              onClick={() => scrollToSection("socials")}
            >
              <img src={`/images/icons/bottom.png`} width={60}></img>
            </Div>
          </motion.div>
        </Div>
      </Section>
    </>
  );
};

const titleStyle = {
  fontSize: "4em",
  lineHeight: "50px",
  marginTop: "$8",
  "@bp1max": { fontSize: "3em" },
};

const arrowDownIconStyle = {
  position: "relative",
  borderRadius: "$pill",
  width: " 60px",
  height: "60px",
  cursor: "pointer",
};
