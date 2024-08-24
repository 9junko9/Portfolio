import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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
          console.log("Email send error:", error);
          setConfirmationMessage("Erreur lors de l'envoi du message.");
          setMessageType("error");
          setTimeout(() => {
            setConfirmationMessage("");
            setMessageType("");
          }, 5000);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>
            First Name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
          {confirmationMessage && (
            <div className={`confirmation-message ${messageType}`}>
              {confirmationMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
