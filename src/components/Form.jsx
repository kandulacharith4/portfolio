import "../styles/Form.css";

function Form() {
  return (
    <section className="contact-card">
      <h2>Contact Me</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/mpwddjja"  // <-- Replace this with your actual Formspree endpoint
        method="POST"
      >
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Form;
