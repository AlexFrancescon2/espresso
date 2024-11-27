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
  hasShadow,
  isFullscreen,
}) => {
  return (
    <div
      id={id}
      className={styles({
        url: backgroundImage,
        index: zindex,
        marginTop,
        backgroundColor,
        hasShadow,
        isFullscreen,
      })({
        css,
      })}
      onClick={onClick && onClick()}
    >
      {children}
    </div>
  );
};

const styles = ({
  url,
  index,
  marginTop,
  backgroundColor,
  hasShadow,
  isFullscreen,
}) =>
  css({
    minHeight: isFullscreen ? "100vh" : null,
    padding: "$76",
    position: "relative",
    zIndex: index,
    marginTop: marginTop,
    backgroundColor: `$${backgroundColor}`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundImage: url && `url(/images/${url})`,
    boxShadow: hasShadow
      ? "rgba(0, 0, 0, 0.19) 0px 20px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      : null,
    borderBottom: hasShadow
      ? `5px solid $${
          backgroundColor.includes("primary") ? "secondary" : "primary"
        }`
      : null,
    "@bp1max": {
      padding: "$40 $24",
    },
  });
