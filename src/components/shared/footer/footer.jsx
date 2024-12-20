import { useEffect, useMemo, useState } from "react";

import { MenuItem } from "./menu-items";
import { css } from "@/styles/system";
import { useLanguage } from "@/assets/translations/languageProvider";

// import { LanguageSelector } from "./language-selector";

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const Footer = () => {
  const sections = useMemo(() => ["logo", "solutions", "whyus", "socials"], []);
  const [activeSection, setActiveSection] = useState("logo");
  const { translations } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
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
          onClick={() => scrollToSection("solutions")}
          isActive={activeSection === "solutions"}
        >
          {translations["footer.solutions"]}
        </MenuItem>
        <MenuItem
          onClick={() => scrollToSection("whyus")}
          isActive={activeSection === "whyus"}
        >
          {translations["footer.whyus"]}
        </MenuItem>
        <MenuItem
          onClick={() => scrollToSection("socials")}
          isActive={activeSection === "socials"}
        >
          {translations["banner.socials"]}
        </MenuItem>
        <span></span>
        {/* <LanguageSelector /> */}
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
  bottom: "20px",
  borderRadius: "$pill",
  width: "350px",
  zIndex: "99",
  boxShadow: "8px 0px 16px rgba(0, 0, 0, 0.2)",
  backgroundColor: "$black",
  padding: "$16",
  border: "3px solid $white",
  display: "flex",
  justifyContent: "space-between",
  "@bp2max": {
    display: "none",
  },
});
