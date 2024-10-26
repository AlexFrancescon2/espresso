import { css } from "@/styles/system";

export const Text = ({
  children,
  variant,
  size,
  color,
  isBold,
  isBlock,
  hasSpaceLeft,
  hasSpaceTop,
  hasSpaceRight,
  bottomMargin,
  onClick,
  center,
  hasEllipsis,
  noWrap,
  css,
}) => {
  return (
    <>
      <span
        className={styles({
          variant,
          size,
          color,
          isBold,
          isBlock,
          hasSpaceLeft,
          hasSpaceTop,
          hasSpaceRight,
          bottomMargin,
          center,
          hasEllipsis,
          noWrap,
          css,
        })}
        onClick={onClick}
      >
        {children}
      </span>
    </>
  );
};

const styles = css({
  fontFamily: "$normal",
  color: "$black",
  variants: {
    variant: {
      error: {
        color: "$red1",
        fontSize: "$2",
      },
    },
    color: {
      grey: { color: "$grey6" },
      lightGrey: { color: "$grey5" },
      blue: { color: "$blue1" },
      red: { color: "$red1" },
      white: { color: "$white" },
    },
    size: {
      xsmall: {
        fontSize: "$12",
      },
      small: {
        fontSize: "$14",
      },
      medium: {
        fontSize: "$16",
      },
      large: {
        fontSize: "$18",
      },
      xlarge: {
        fontSize: "$35",
        fontWeight: "bold",
      },
    },
    hasSpaceLeft: {
      true: {
        marginLeft: "$1",
      },
    },
    hasSpaceTop: {
      true: {
        marginTop: "$1",
      },
    },
    hasSpaceRight: {
      true: {
        marginRight: "$1",
      },
    },
    isBold: {
      true: {
        fontWeight: 700,
      },
    },
    isBlock: {
      true: {
        display: "block",
      },
    },
    bottomMargin: {
      true: {
        marginBottom: "$8",
      },
    },
    center: {
      true: {
        textAlign: "center",
      },
    },
    hasEllipsis: {
      true: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    },
    noWrap: {
      true: {
        whiteSpace: "nowrap",
      },
    },
  },
  defaultVariants: {
    size: "medium",
    color: "darkgrey",
  },
});
