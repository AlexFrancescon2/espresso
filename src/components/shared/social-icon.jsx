import { css } from "@/styles/system";

export const SocialIcon = ({ css, social }) => {
  return (
    <a href={social.url} className={styles({ css })}>
      <img src={`/images/icons/${social.social}.png`} target="_blank" />
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
