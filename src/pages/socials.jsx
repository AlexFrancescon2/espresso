import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { SocialIcon } from "@/components/shared/social-icon";
import { Text } from "@/components/primitives/text";
import { css } from "@/styles/system";
import { motion } from "framer-motion";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Socials = () => {
  const { translations } = useLanguage();
  const socials = ["instagram", "youtube", "linkedin", "reddit", "tiktok"];

  return (
    <>
      <Section
        backgroundImage="bg2"
        zindex={2}
        backgroundColor="secondaryBlurred"
        id="socials"
        isFullscreen
      >
        <Div isFlex isJustifyCenter isAlignCenter>
          <Text variant="title" center>
            {translations["socials_title"]}
          </Text>
        </Div>
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$60" }}>
          <Text variant="subtitle" center>
            {translations["socials_subtitle"]}
          </Text>
        </Div>

        <Div css={socialsWrapper}>
          {socials.map((social, index) => (
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: index % 2 === 0 ? 0 : 40 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: `0.${index + 1}`,
                type: "spring",
                stiffness: 100,
              }}
              key={social}
            >
              <SocialIcon social={social}></SocialIcon>
            </motion.div>
          ))}
        </Div>

        <Div isFlex isJustifyCenter isAlignCenter css={{ marginTop: "150px" }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: `0.7`,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Div isFlex isJustifyCenter isAlignCenter css={emailWrapperStyles}>
              <Div css={emailIconStyle} isFlex isJustifyCenter isAlignCenter>
                <img src={`src/assets/images/icons/email.png`} width={60}></img>
              </Div>
              <Text isBlock variant="subtitle" css={{ marginBottom: "$8" }}>
                {translations["socials_email"]}
              </Text>
              <a href="mailto:john@example.com" className={emailStyles()}>
                exampleEmail.com
              </a>
            </Div>
          </motion.div>
        </Div>
      </Section>
    </>
  );
};

const emailWrapperStyles = {
  flexDirection: "column",
  padding: "$36   ",
  backgroundColor: "$white",
  borderRadius: "$8",
  position: "relative",
};

const emailStyles = css({
  fontSize: "$27",
  color: "$primary",
  "&:hover": {
    color: "$primary",
    textDecoration: "underline",
  },
});

const emailIconStyle = {
  position: "absolute",
  backgroundColor: "$white",
  border: "2px solid $white",
  borderRadius: "$pill",
  top: "-40px",
  width: " 80px",
  height: "80px",
};

const socialsWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$48",
  "@bp2max": {
    flexDirection: "column",
  },
};
