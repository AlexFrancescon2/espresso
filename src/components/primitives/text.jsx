import { css, keyframes } from "@/styles/system";

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
  isUnderlined,
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
          isUnderlined,
          css,
        })}
        onClick={onClick}
      >
        {children}
      </span>
    </>
  );
};

const underline = keyframes({
  to: {
    backgroundSize: "100% 100%",
  },
});

const styles = css({
  fontFamily: "$normal",
  color: "$black",
  variants: {
    variant: {
      title: {
        fontSize: "$35",
        fontWeight: "700",
        colro: "$black",
        lineHeight: "40px",
        display: "block",
      },
      subtitle: {
        fontSize: "$20",
        color: "$grey7",
        display: "block",
      },
    },
    color: {
      grey: { color: "$grey7" },
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
    isUnderlined: {
      true: {
        lineHeight: 1.5,
        display: "inline",
        backgroundImage: `linear-gradient(transparent 50%, $primary 50%, $secondary 85%, transparent 85%,  transparent 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 100%",
        animation: `${underline} 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s forwards`,
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
