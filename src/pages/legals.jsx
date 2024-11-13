import { Div } from "@/components/primitives/div";
import { PrivacyPolicy } from "@/pages/privacy-policy";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useState } from "react";

export const Legals = () => {
  const { translations } = useLanguage();
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
      >
        <Div isFlex isAlignCenter>
          <div>
            <img src="src/assets/images/logo.png" width={50} />
          </div>
          <Text isBlock size="xlarge">
            Espresso
          </Text>
        </Div>
        <Text isBlock>All rights reserved</Text>
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
