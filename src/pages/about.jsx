import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";
import { Link } from "@/components/primitives/link";
import { useLanguage } from "@/assets/translations/languageProvider";

export const About = () => {
  const { translations } = useLanguage();
  return (
    <Div
      css={{ width: "100vw", height: "100%" }}
      isFlex
      isJustifyCenter
      isAlignCenter
    >
      <Div>
        <Text center size="xlarge">
          {translations.about}
        </Text>
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ gap: "$20", width: "100%" }}
        >
          <Link to="/">{translations.homepage}</Link>
          <Link to="/contacts">{translations.contacts}</Link>
        </Div>
      </Div>
    </Div>
  );
};
