import { css } from "@/styles/system";

export const Section = ({
  children,
  css,
  onClick,
  backgroundImage,
  zindex,
  marginTop,
  backgroundColor,
  id,
}) => {
  return (
    <div
      id={id}
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
    zIndex: index,
    marginTop: marginTop,
    "@bp1max": {
      padding: "$20",
    },
    "@bp4min": {
      backgroundSize: "100% auto",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(src/assets/images/${url}.png)`,
      backgroundColor: `$${backgroundColor}`,
    },
  });
