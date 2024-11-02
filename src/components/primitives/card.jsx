import { Div } from "@/components/primitives/div";
import { Icon } from "@/components/primitives/icon";
import { Text } from "@/components/primitives/text";
import { css } from "@/styles/system";

export const Card = ({ css, onClick, icon, title, description }) => {
  return (
    <div className={styles({ css })} onClick={onClick && onClick()}>
      <Icon
        render={icon}
        color="grey"
        size="xlarge"
        css={{ marginRight: "$28" }}
      />
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
  boxShadow: "10px 10px 20px -14px rgba(0, 0, 0, 1.0)",
  "&:hover": {
    boxShadow: "12px 12px 22px -14px rgba(0, 0, 0, 1.0)",
  },
});
