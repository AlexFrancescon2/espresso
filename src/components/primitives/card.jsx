import { Div } from "@/components/primitives/div";
import { Icon } from "@/components/primitives/icon";
import { Text } from "@/components/primitives/text";
import { css } from "@/styles/system";

export const Card = ({ css, onClick, icon, title, description }) => {
  return (
    <div className={styles({ css })} onClick={onClick && onClick()}>
      <Icon render={icon} color="black" />
      <Div>
        <Text size="large" isBold isBlock>
          {title}
        </Text>
        <Text>{description}</Text>
      </Div>
    </div>
  );
};

const styles = css({
  backgroundColor: "rgba(255, 255, 255, 0.56)",
  borderRadius: "$12",
  padding: "$20",
  display: "flex",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  "&:hover": {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
});
