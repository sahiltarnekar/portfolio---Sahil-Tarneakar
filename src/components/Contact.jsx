import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    toast.loading("Sending message...", { id: "send" });

    // 1️⃣ Send MAIN email (to you)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_MAIN_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        // 2️⃣ Send AUTO-REPLY email (to user)
        emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_AUTO_TEMPLATE_ID,
          {
            user_name: formRef.current.user_name.value,
            user_email: formRef.current.user_email.value,
            message: formRef.current.message.value,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );

        toast.success("Message sent successfully 🚀", { id: "send" });
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message ❌", { id: "send" });
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-6 space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-slate-900">Contact</h2>
          <p className="text-slate-600 leading-relaxed">
        I’m open to internships, full-time roles, and freelance projects.
        Feel free to reach out anytime.
      </p>

          <div className="flex flex-col gap-5">
            <a href="mailto:sahiltarnekar2@gmail.com" className="flex gap-4 items-center">
              <FaEnvelope className="text-xl text-cyan-600" />
              sahiltarnekar2@gmail.com
            </a>

            <a href="https://github.com/sahiltarnekar" target="_blank" className="flex gap-4 items-center">
              <FaGithub className="text-xl" />
              github.com/sahiltarnekar
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
              target="_blank"
              className="flex gap-4 items-center"
            >
              <FaLinkedin className="text-xl text-blue-600" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 bg-white p-6 rounded-2xl shadow-lg"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 py-2 rounded text-white font-semibold
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
                }`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
