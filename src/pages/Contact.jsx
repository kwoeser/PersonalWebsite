import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../contact.css"; 


function Contact() {
  // message will send with the senders name, email, and a message to karmawoeser1@gmail.com
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // emailjs api
    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">contact me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message "
          value={formData.message}
          onChange={handleChange}
          required
          className="textarea-field"
        />
        <button type="submit" className="send-button">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contact;
