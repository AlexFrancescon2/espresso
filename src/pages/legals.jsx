import { Div } from "@/components/primitives/div";
import { PrivacyPolicy } from "@/pages/privacy-policy";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useState } from "react";

// import { useLanguage } from "@/assets/translations/languageProvider";

export const Legals = () => {
  // const { translations } = useLanguage();
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  return (
    <>
      <PrivacyPolicy
        isOpen={isPrivacyPolicyOpen}
        setIsOpen={setIsPrivacyPolicyOpen}
      />
      <Section
        backgroundImage="bg-blob-2.png"
        zindex={3}
        backgroundColor="secondaryBlurred"
        id="legals"
        css={{ padding: "$76 $76 $32 $76" }}
      >
        <Div isFlex isAlignCenter>
          <div>
            <img src="src/assets/images/logo.png" width={50} />
          </div>
          <Text isBlock size="xlarge">
            Espresso
          </Text>
        </Div>
        <Text isBlock>Legal Address</Text>
        <Text isBlock>KvK</Text>
        <Div
          css={privacyPolicyStyle}
          onClick={() => setIsPrivacyPolicyOpen(true)}
        >
          <Text isBlock>See our privacy policy</Text>
        </Div>
      </Section>
    </>
  );
};

const privacyPolicyStyle = {
  cursor: "pointer",
  "&:hover": {
    "& span": {
      textDecoration: "underline",
    },
  },
};
