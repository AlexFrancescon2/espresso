import { Div } from "@/components/primitives/div";
import { useLanguage } from "@/assets/translations/languageProvider";

export const LanguageSelectorMenu = () => {
  const { languages } = useLanguage();
  return (
    <Div isFlex isAlignCenter isJustifyCenter css={languageSelectorMenuStyle}>
      {languages.map((lang) => {
        return (
          <Div key={lang} css={languageCircleStyle}>
            {lang}
          </Div>
        );
      })}
    </Div>
  );
};

const languageSelectorMenuStyle = {
  flexDirection: "column",
  position: "absolute",
  right: "11px",
  top: "-45px",
};

const languageCircleStyle = {
  width: "30px",
  height: "30px",
  border: "2px solid $white",
  borderRadius: "$pill",
  right: "8px",
  top: "7.5px",
  cursor: "pointer",
};
