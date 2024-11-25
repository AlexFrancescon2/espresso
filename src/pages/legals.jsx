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
        css={{ padding: "$76 $76 $32 $76" }}
      >
        <Div isFlex isAlignCenter css={{ marginBottom: "$20" }}>
          <div>
            <img src="/images/logo.png" width={50} />
          </div>
          <Text isBlock size="xlarge">
            Espresso
          </Text>
        </Div>
        <Text isBlock css={{ marginBottom: "$8" }}>
          <b>{translations["legal_address"]}</b>: Papaverweg 34 - unit B100,
          1032 KJ, Amsterdam
        </Text>
        <Text isBlock css={{ marginBottom: "$8" }}>
          <b>KvK</b>: 95228675
        </Text>
        <Div
          css={privacyPolicyStyle}
          onClick={() => setIsPrivacyPolicyOpen(true)}
        >
          <Text isBlock>{translations["privacy_policy"]}</Text>
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
