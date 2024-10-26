// Header.jsx

// import { Div } from "@/components/primitives/div";

import { Text } from "@/components/primitives/text";
import { css } from "@/styles/system";

// import { useLanguage } from "@/assets/translations/languageProvider";

export const Footer = () => {
  // const { translations } = useLanguage();
  return (
    <div className={wrapperStyle()}>
      <footer className={footerStyle()}>
        <span></span>
        <Text color="white">Home</Text>
        <Text color="white">Services</Text>
        <Text color="white">Socials</Text>
        <span></span>
      </footer>
    </div>
  );
};

const wrapperStyle = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const footerStyle = css({
  position: "fixed",
  bottom: "50px",
  borderRadius: "$pill",
  width: "60vw",
  zIndex: "99",
  boxShadow: "8px 0px 16px rgba(0, 0, 0, 0.2)",
  backgroundColor: "$black",
  padding: "$16",
  border: "3px solid $white",
  display: "flex",
  justifyContent: "space-between",
});
