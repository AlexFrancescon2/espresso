import { sendContactForm } from "@/api/contact";
import { useLanguage } from "@/assets/translations/languageProvider";
import { Button } from "@/components/primitives/button";
import { Div } from "@/components/primitives/div";
import { Input } from "@/components/primitives/input";
import { Text } from "@/components/primitives/text";
import { TextArea } from "@/components/primitives/textarea";
import { useState } from "react";

export const Contacts = () => {
  const { translations } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log({ I: import.meta.env });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactForm({ name, email, message });
      alert("Messaggio inviato con successo!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Errore durante l'invio del messaggio. Riprova più tardi.");
    } finally {
    }
  };

  return (
    <Div
      css={{ width: "100%", height: "100%" }}
      isFlex
      isJustifyCenter
      isAlignCenter
    >
      <Div css={contactFormStyle}>
        <Text size="large" bottomMargin isBlock color="black">
          {translations.contacts}
        </Text>
        <Div>
          <Input
            label={translations.name}
            placeholder={translations.name_placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="full"
            hasSpaceBottom
          />
          <Input
            label={translations.email}
            placeholder={translations.email_placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            hasSpaceBottom
          />
          <TextArea
            label={translations.message}
            placeholder={translations.message_placeholder}
            hasSpaceBottom
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            css={{ width: "375px", maxWidth: "375px", maxHeight: "400px" }}
          ></TextArea>
        </Div>
        <Div isFlex css={{ justifyContent: "end" }}>
          <Button hasSpaceTop onClick={onSubmit}>
            {translations.submit}
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

const contactFormStyle = {
  padding: "$40",
  borderRadius: "$8",
  backgroundColor: "$white2",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
};
