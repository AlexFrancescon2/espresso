import { useRef, useState } from "react";

import { Div } from "@/components/primitives/div";
import { LanguageSelectorMenu } from "./language-selector-menu";
import { useClickOutside } from "@/hooks/click-outside";
import { useLanguage } from "@/assets/translations/languageProvider";

export const LanguageSelector = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      {isOpen && <LanguageSelectorMenu setIsOpen={setIsOpen} />}
      <Div
        isFlex
        isAlignCenter
        isJustifyCenter
        css={languageCircleStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={`/images/flags/${language}.png`} width={40}></img>
      </Div>
    </div>
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
