import { Div } from "@/components/primitives/div";
import { Section } from "@/components/primitives/section";
import { SocialIcon } from "@/components/shared/social-icon";
import { Text } from "@/components/primitives/text";
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
        hasShadow
      >
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$8" }}>
          <Text size="xlarge" center>
            {translations["socials.title"]}
          </Text>
        </Div>
        <Div isFlex isJustifyCenter isAlignCenter css={{ marginBottom: "$40" }}>
          <Text size="lg" center color="grey">
            {translations["socials.title"]}
          </Text>
        </Div>

        <Div isFlex isJustifyCenter isAlignCenter css={{ gap: "$48" }}>
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
      </Section>
    </>
  );
};
