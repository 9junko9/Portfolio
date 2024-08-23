const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact</h2>
    <form className="contact-form">
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
    </form>
  </section>
);

export default Contact;
