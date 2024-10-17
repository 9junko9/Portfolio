import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_m2xy6tg",
        "template_6ug8lg6",
        form.current,
        "g8ADPXm1iCy50E1mw"
      )
      .then(
        () => {
          setConfirmationMessage("Message envoyé avec succès !");
          setMessageType("success");
          setTimeout(() => {
            setConfirmationMessage("");
            setMessageType("");
          }, 5000);
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'email :", error);
          setConfirmationMessage("Erreur lors de l'envoi du message.");
          setMessageType("error");
        }
      );

    e.target.reset();
    setIsSending(false);
  };

  return (
    <section id="contact" className="contact container">
      <h2 className="contact__title">Contact</h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nom *</label>
        <input type="text" name="name" required id="name" placeholder="Nom *" />

        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          required
          id="email"
          placeholder="Email *"
        />

        <label htmlFor="object">Objet</label>
        <input type="text" name="object" id="object" placeholder="Objet" />

        <label htmlFor="message">Message *</label>
        <textarea
          name="message"
          required
          id="message"
          placeholder="Message *"
          rows="8"
        ></textarea>

        <div className="form__send">
          <button
            className="form__button button"
            type="submit"
            disabled={isSending}
          >
            Envoyer
          </button>
        </div>
      </form>

      {confirmationMessage && (
        <div
          className={`contact__message ${
            messageType === "error" ? "contact__message--error" : ""
          }`}
        >
          {confirmationMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
