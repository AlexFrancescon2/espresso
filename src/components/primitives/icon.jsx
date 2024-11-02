import { css, keyframes } from "@/styles/system";

import { directionSpacingVariants } from "@/components/primitives/common";

export const Icon = ({
  render,
  size,
  color,
  hasSpin,
  hasPulse,
  hasSpaceRight,
  hasSpaceLeft,
  hasFloatRight,
  hasFloatLeft,
  css,
  role,
}) => {
  const Icon = render;

  return (
    <span
      className={styles({
        size,
        color,
        hasSpin,
        hasPulse,
        hasSpaceRight,
        hasSpaceLeft,
        hasFloatRight,
        hasFloatLeft,
        css,
      })}
      role={role || "img"}
    >
      {Icon && <Icon />}
    </span>
  );
};

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const styles = css({
  // Adapt to text
  width: "1em",
  fill: "currentColor",
  fontSize: "inherit",
  display: "inline-flex",
  alignItems: "center",
  textAlign: "center",

  "& svg": {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },

  variants: {
    color: {
      greyClear: {
        color: "$grey10",
      },
      black: {
        color: "$black",
      },
      light: {
        color: "$grey4",
      },
      dark: {
        color: "$grey8",
      },
      blue: {
        color: "$blue1",
      },
      yellow: {
        color: "$yellow1",
      },
      white: {
        color: "$white",
      },
      grey: {
        color: "$grey4",
      },
      darkgrey: {
        color: "$grey6",
      },
      red: {
        color: "$red1",
      },
      greybg: {
        right: 0,
        display: "flex",
        width: "30px",
        height: "100%",
        backgroundColor: "$grey1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px 2px 2px 0px",
        border: "1px solid $grey4",
      },
      greybox: {
        right: 0,
        display: "flex",
        width: "30px",
        backgroundColor: "$grey1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px 2px 2px 0px",
        border: "1px solid $grey4",
      },
    },
    size: {
      xsmall: {
        width: "$2",
        "& svg": {
          width: "$2",
          height: "$2",
        },
      },
      small: {
        width: "$4",
        "& svg": {
          width: "$3",
          height: "$3",
        },
      },
      medium: {
        width: "$16",
        "& svg": {
          width: "$16",
          height: "$16",
        },
      },
      large: {
        width: "$20",
        "& svg": {
          width: "$20",
          height: "$20",
        },
      },
      xlarge: {
        width: "$28",
        "& svg": {
          width: "$28",
          height: "$28",
        },
      },
      giant: {
        width: "$100",
        "& svg": {
          width: "$100",
          height: "$100",
        },
      },
      xgiant: {
        width: "130px",
        "& svg": {
          width: "130px",
          height: "130px",
        },
      },
    },
    hasFloatRight: {
      true: {
        position: "absolute",
        right: "$1",
        display: "flex",
        alignSelf: "center",
        justifySelf: "center",
        pointerEvents: "none",
      },
    },
    hasFloatLeft: {
      true: {
        position: "absolute",
        left: "$1",
        display: "flex",
        alignSelf: "center",
        justifySelf: "center",
        pointerEvents: "none",
      },
    },
    ...directionSpacingVariants,
    hasSpin: {
      true: {
        animation: `${spin} 2s linear infinite`,
      },
    },
    hasPulse: {
      true: {
        animation: `${spin} 1s steps(8) infinite`,
      },
    },
  },
});
