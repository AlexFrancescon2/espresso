import { Div } from "@/components/primitives/div";
import { useLanguage } from "@/assets/translations/languageProvider";

export const LanguageSelectorMenu = ({ setIsOpen }) => {
  const { languages, switchLanguage } = useLanguage();

  const onSwitchLang = (lang) => {
    switchLanguage(lang);
    setIsOpen(false);
  };

  return (
    <Div isFlex isAlignCenter isJustifyCenter css={languageSelectorMenuStyle}>
      {languages.map((lang) => {
        return (
          <Div
            key={lang}
            css={languageCircleStyle}
            onClick={() => onSwitchLang(lang)}
          >
            <img src={`src/assets/images/flags/${lang}.png`} width={30}></img>
          </Div>
        );
      })}
    </Div>
  );
};

const languageSelectorMenuStyle = {
  flexDirection: "column-reverse",
  gap: "$8",
  position: "absolute",
  right: "11px",
  top: "-80px",
};

const languageCircleStyle = {
  width: "30px",
  height: "30px",
  border: "2px solid $white",
  borderRadius: "$pill",
  right: "8px",
  top: "7.5px",
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};
