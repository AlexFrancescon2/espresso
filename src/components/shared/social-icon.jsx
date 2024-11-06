import { css } from "@/styles/system";

export const SocialIcon = ({ children, css, url }) => {
  return (
    <a href={url} className={styles({ css })}>
      {children}
    </a>
  );
};

const styles = css({
  variants: {
    isFlex: {
      true: {
        display: "flex",
      },
    },
    isJustifyCenter: {
      true: {
        justifyContent: "center",
      },
    },
    isAlignCenter: {
      true: {
        alignItems: "center",
      },
    },
  },
});
