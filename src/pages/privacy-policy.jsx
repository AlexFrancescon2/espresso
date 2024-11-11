import { Div } from "@/components/primitives/div";
import { Modal } from "@/components/primitives/modal/modal";
import { Text } from "@/components/primitives/text";
import { useLanguage } from "@/assets/translations/languageProvider";

export const PrivacyPolicy = ({ isOpen, setIsOpen }) => {
  const { translations } = useLanguage();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Div
        css={{
          backgroundColor: "white",
          borderRadius: "$4",
          maxHeight: "80vh",
          maxWidth: "80vw",
          overflowY: "scroll",
        }}
      >
        <Div css={padding}>
          <Text size="xlarge" isBlock bottomMargin>
            {translations["privacy_policy.title"]}
          </Text>
          <Text size="small" isBlock bottomMargin>
            {translations["privacy_policy_last_updated"].replace(
              "{date}",
              "20/11/2024"
            )}
          </Text>
          <Text>{translations.privacy_policy_body_1}</Text>
        </Div>

        <Div css={padding}>
          <Text size="large" isBold isBlock bottomMargin>
            {translations.privacy_policy_subtitle_2}
          </Text>
          <Text>{translations.privacy_policy_body_2}</Text>
        </Div>

        <Div css={padding}>
          <Text size="large" isBlock isBold bottomMargin>
            {translations.privacy_policy_subtitle_3}
          </Text>
          <Text>{translations.privacy_policy_body_3}</Text>
        </Div>

        <Div css={padding}>
          <Text size="large" isBlock isBold bottomMargin>
            {translations.privacy_policy_subtitle_4}
          </Text>
          <Text>{translations.privacy_policy_body_4}</Text>
        </Div>

        <Div css={padding}>
          <Text size="large" isBlock isBold bottomMargin>
            {translations.privacy_policy_subtitle_5}
          </Text>
          <Text>{translations.privacy_policy_body_5}</Text>
        </Div>

        <Div css={padding}>
          <Text size="large" isBlock isBold bottomMargin>
            {translations.privacy_policy_credits}
          </Text>
          <Text>
            {translations.privacy_policy_credits_body.replace(
              "{url}",
              "https://www.flaticon.com/"
            )}
          </Text>
        </Div>
      </Div>
    </Modal>
  );
};

const padding = { padding: "$24 $40" };
