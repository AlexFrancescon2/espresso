import { css } from "@/styles/system";

export const Section = ({
  children,
  css,
  onClick,
  backgroundImage,
  zindex,
  marginTop,
  backgroundColor,
}) => {
  return (
    <div
      className={styles({
        url: backgroundImage,
        index: zindex,
        marginTop,
        backgroundColor,
      })({
        css,
      })}
      onClick={onClick && onClick()}
    >
      {children}
    </div>
  );
};

const styles = ({ url, index, marginTop, backgroundColor }) =>
  css({
    minHeight: "100vh",
    padding: "$64",
    position: "relative",
    backgroundSize: "100% auto",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(src/assets/images/${url}.png)`,
    backgroundColor: `$${backgroundColor}`,
    zIndex: index,
    marginTop: marginTop,
  });
