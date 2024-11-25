import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { motion } from "framer-motion";
import { scrollToSection } from "@/components/shared/footer/footer";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Banner = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Section
        zindex={5}
        backgroundColor="secondaryBlurred"
        id="banner"
        hasShadow
        css={customSection}
      >
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ flexDirection: "column" }}
        >
          <Div isFlex isJustifyCenter isAlignCenter>
            <Text variant="title" center css={{ marginBottom: "$8" }}>
              {translations["banner.intro"]}
            </Text>
          </Div>
          <Div
            isFlex
            isJustifyCenter
            isAlignCenter
            css={{ marginBottom: "$4" }}
          >
            <Text variant="subtitle" center>
              {translations["banner.ending"]}
            </Text>
          </Div>
          <motion.div
            animate={{ y: 8 }}
            transition={{
              type: "spring",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <Div
              css={ArrowDownIconStyle}
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

// const scroller = {
//   flexDirection: "column",
//   padding: "$36   ",
//   backgroundColor: "$white",
//   borderRadius: "$8",
//   position: "relative",
//   cursor: "pointer",
//   width: "40vw",
//   "@bp2max": {
//     width: "80vw",
//   },
// };

const ArrowDownIconStyle = {
  position: "relative",
  // backgroundColor: "$white",
  // border: "2px solid $white",
  borderRadius: "$pill",
  // bottom: "-30px",
  width: " 60px",
  height: "60px",
  cursor: "pointer",
};

const customSection = {
  padding: "$76 $76 200px $76",
  "@bp1max": {
    padding: "$40 $24 100px $24",
  },
};
