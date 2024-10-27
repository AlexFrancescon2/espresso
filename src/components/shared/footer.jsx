import { useEffect, useState } from "react";

import { Div } from "@/components/primitives/div";
import { css } from "@/styles/system";
import { useLanguage } from "@/assets/translations/languageProvider";

// import { useLanguage } from "@/assets/translations/languageProvider";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const Footer = () => {
  // const { translations } = useLanguage();
  const sections = ["logo", "services", "socials"];
  const [activeSection, setActiveSection] = useState("logo");

  console.log({ activeSection });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <div className={wrapperStyle()}>
      <footer className={footerStyle()}>
        <span></span>
        <MenuItem
          onClick={() => scrollToSection("logo")}
          isActive={activeSection === "logo"}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => scrollToSection("services")}
          isActive={activeSection === "services"}
        >
          Services
        </MenuItem>
        <MenuItem
          onClick={() => scrollToSection("socials")}
          isActive={activeSection === "socials"}
        >
          Socials
        </MenuItem>
        <span></span>
        <LanguageSelector />
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
  width: "40vw",
  zIndex: "99",
  boxShadow: "8px 0px 16px rgba(0, 0, 0, 0.2)",
  backgroundColor: "$black",
  padding: "$16",
  border: "3px solid $white",
  display: "flex",
  justifyContent: "space-between",
});

const MenuItem = ({ children, isActive, onClick }) => {
  return (
    <span className={menuItemStyle({ isActive })} onClick={onClick}>
      {children}
    </span>
  );
};

const menuItemStyle = css({
  color: "$white",
  cursor: "pointer",
  textDecoration: "none",
  borderBottom: "2px solid transparent",
  transition: "border-bottom 0.3s ease",
  variants: {
    isActive: {
      true: {
        borderBottom: "2px solid $white",
        fontWeight: "700",
      },
      false: {
        borderBottom: "2px solid transparent",
      },
    },
  },
});

const LanguageSelector = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Div isFlex isAlignCenter isJustifyCenter css={languageCircleStyle}>
      {language}
    </Div>
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
