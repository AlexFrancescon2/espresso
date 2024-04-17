import React from "react";

import { css } from "@/styles/system";
import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";

export const Input = ({
  id,
  name,
  value,
  defaultValue,
  hasSpaceBottom,
  hasSpaceTop,
  hasSpaceRight,
  hasSpaceLeft,
  size,
  autoFocus,
  placeholder,
  isDisabled,
  isReadOnly,
  label,
  hasWhiteLabel,
  onChange,
  onBlur,
  onMouseDown,
  onKeyDown,
  type = "text",
  isFitContent,
  css,
  role,
  maxLength,
  min,
  max,
  autoSize,
  checked,
}) => {
  return (
    <>
      <div
        className={wrapper({
          hasSpaceBottom,
          hasSpaceTop,
          hasSpaceLeft,
          hasSpaceRight,
          size,
        })}
      >
        <div>
          {label && (
            <Text
              css={{
                whiteSpace: "nowrap",
                color: hasWhiteLabel ? "$white" : "$black",
              }}
            >
              {label}
            </Text>
          )}
          <Div isFlex css={{ width: "100%", position: "relative" }}>
            <input
              className={styles({
                css,
              })}
              type={type}
              value={value}
              defaultValue={defaultValue}
              id={id}
              checked={checked}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              readOnly={isReadOnly}
              min={min}
              max={max}
              maxLength={maxLength}
              onChange={onChange}
              onMouseDown={onMouseDown}
              onKeyDown={(event) => {
                onKeyDown && onKeyDown(event);
              }}
              onKeyUp={(event) => {
                isFitContent && onkeyUpHandleSize(event);
              }}
              onBlur={onBlur}
              autoFocus={autoFocus}
              size={autoSize ? String(value).length : undefined}
              role={role}
            />
          </Div>
        </div>
      </div>
    </>
  );
};

const wrapper = css({
  color: "$black",
  position: "relative",
  display: "flex",
  width: "100%",
  variants: {
    hasSpaceBottom: {
      true: {
        marginBottom: "$8",
      },
    },
    hasSpaceTop: {
      true: {
        marginTop: "$8",
      },
    },
    hasSpaceLeft: {
      true: {
        marginLeft: "$8",
      },
    },
    hasSpaceRight: {
      true: {
        marginRight: "$8",
      },
    },
    size: {
      xs: {
        width: "60px",
      },
      small: {
        width: "200px",
      },
      medium: {
        width: "300px",
      },
      large: {
        width: "400px",
      },
      xl: {
        width: "800px",
      },
      full: {
        width: "100%",
      },
    },
  },
});
const styles = css({
  padding: "$4 $4",
  height: "$28",
  background: "white",
  border: "1px solid $grey4",
  borderRadius: "$4",
  outline: "none",
  fontFamily: "$normal",
  color: "$black",
  width: "100%",
  transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
  "&:focus": {
    borderColor: "$blue1",
  },
  "&:disabled": {
    border: "1px solid $grey4",
    background: "$grey2",
    cursor: "not-allowed !important",
  },
  "&::placeholder": {
    color: "$grey5",
  },
});