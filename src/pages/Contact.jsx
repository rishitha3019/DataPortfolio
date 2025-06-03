import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "your_service_id",      // from EmailJS dashboard
      "your_template_id",     // from EmailJS dashboard
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "your_user_id"          // public key from EmailJS account
    )
    .then(() => {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      alert("Something went wrong. Please try again.");
      console.error(err);
    });
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-16 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold mb-6">💬 Get in Touch</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your message"
          required
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          {sent ? "Sent ✅" : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
