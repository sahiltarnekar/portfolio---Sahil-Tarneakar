  import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { fadeUp } from "../animations/fadeUp";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

 
    const sendEmail = (e) => {
  e.preventDefault();
  if (loading) return;

  setLoading(true);
  setStatus("");

  // 1️⃣ Send message to YOU
  emailjs
    .sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_MAIN_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      // 2️⃣ Auto-reply to USER
      return emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_AUTO_TEMPLATE_ID,
        {
          user_name: formRef.current.user_name.value,
          user_email: formRef.current.user_email.value,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
    })
    .then(() => {
      setStatus("Message sent successfully. I’ll get back to you within 24 hours.");
      formRef.current.reset();
    })
    .catch(() => {
      setStatus("Something went wrong. Please try again later.");
    })
    .finally(() => {
      setLoading(false);
    });


  };

  return (
    <section id="contact" className="py-24 bg-[#0b0f19]">
      <Container>

        <SectionHeader
          title="Contact"
          subtitle="Open to internships, entry-level roles, and freelance opportunities. I usually respond within 24 hours."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">

          {/* LEFT – INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-6 text-gray-400 space-y-8"
          >
            <p className="max-w-md">
              If you’re hiring, collaborating, or just want to connect,
              feel free to reach out using the form or via email.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sahiltarnekar2@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-cyan-400" />
                sahiltarnekar2@gmail.com
              </a>

              <a
                href="https://github.com/sahiltarnekar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-white transition"
              >
                <FaGithub />
                github.com/sahiltarnekar
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-blue-400" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-6 bg-[#111827] border border-[#1f2937]
            rounded-xl p-8"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-[#0b0f19] border border-[#1f2937]
                rounded-md px-4 py-3 text-gray-200
                focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-[#0b0f19] border border-[#1f2937]
                rounded-md px-4 py-3 text-gray-200
                focus:outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full bg-[#0b0f19] border border-[#1f2937]
                rounded-md px-4 py-3 text-gray-200 resize-none
                focus:outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md font-medium
                bg-cyan-400 text-black hover:bg-cyan-300 transition
                disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-gray-400">
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
