import { css } from "@/styles/system";

export const SocialIcon = ({ css, url, social }) => {
  return (
    <a href={url} className={styles({ css })}>
      <img src={`src/assets/images/icons/${social}.png`} />
    </a>
  );
};

const styles = css({
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  width: "100px",
  height: "100px",
  borderRadius: "$pill",
  display: "block",
  transition: "transform 0.5s ease",
  "& img": {
    width: "100px",
  },
  "&:hover": {
    transform: "scale(1.1)",
    "& img": {
      transform: "scale(1.1)",
    },
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
});
