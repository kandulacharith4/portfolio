import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-card">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:kandulacharith7@gmail.com">kandulacharith7@gmail.com</a>
          </p>
          <p><strong>Phone:</strong> +1 (312) 885-9340</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/charith-kandula-a4b38a297/"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/kandulacharith4?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              View Repositories
            </a>
          </p>
        </div>
      </section>

      <section className="contact-card">
        <h2>Contact Me</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/mpwddjja"
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
    </>
  );
}

export default Contact;
