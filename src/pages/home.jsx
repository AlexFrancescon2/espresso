import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";
import { Link } from "@/components/primitives/link";
import { useLanguage } from "@/assets/translations/languageProvider";

export const Home = () => {
  const { translations } = useLanguage();

  return (
    <Div
      css={{ width: "100%", height: "100%" }}
      isFlex
      isJustifyCenter
      isAlignCenter
    >
      <Div>
        <Text center size="xlarge">
          {translations.homepage}
        </Text>
        <Div
          isFlex
          isJustifyCenter
          isAlignCenter
          css={{ gap: "$20", width: "100%" }}
        >
          <Link to="/about">{translations.about}</Link>
          <Link to="/contacts">{translations.contacts}</Link>
        </Div>
      </Div>
    </Div>
  );
};
