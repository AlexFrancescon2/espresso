import { css } from "@/styles/system";

export const MenuItem = ({ children, isActive, onClick }) => {
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
