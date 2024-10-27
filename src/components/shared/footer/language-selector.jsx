import { Div } from "@/components/primitives/div";
import { LanguageSelectorMenu } from "./language-selector-menu";
import { useLanguage } from "@/assets/translations/languageProvider";
import { useState } from "react";

export const LanguageSelector = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <LanguageSelectorMenu />}
      <Div
        isFlex
        isAlignCenter
        isJustifyCenter
        css={languageCircleStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {language}
      </Div>
    </>
  );
};

const languageCircleStyle = {
  position: "absolute",
  width: "40px",
  height: "40px",
  border: "2px solid $white",
  borderRadius: "$pill",
  right: "8px",
  top: "7.5px",
  cursor: "pointer",
};