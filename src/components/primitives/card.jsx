import { Div } from "@/components/primitives/div";
import { Text } from "@/components/primitives/text";
import { css } from "@/styles/system";

export const Card = ({ css, onClick, imageSrc, title, description }) => {
  return (
    <div className={styles({ css })} onClick={onClick && onClick()}>
      <Div isFlex isAlignCenter isJustifyCenter>
        <div>
          <img src={imageSrc} className={imageStyle()} />
        </div>
      </Div>
      <Div>
        <Text size="large" isBold isBlock css={{ marginBottom: "$4" }}>
          {title}
        </Text>
        <Text css={{ fontSize: "$14" }}>{description}</Text>
      </Div>
    </div>
  );
};

const styles = css({
  backgroundColor: "$white",
  borderRadius: "$12",
  padding: "$20",
  display: "flex",
  boxShadow: "10px 10px 20px -14px rgba(0, 0, 0, 1.0)",
  "&:hover": {
    boxShadow: "12px 12px 22px -14px rgba(0, 0, 0, 1.0)",
  },
});

const imageStyle = css({
  marginRight: "$28",
  width: "80px",
  height: "auto",
});
