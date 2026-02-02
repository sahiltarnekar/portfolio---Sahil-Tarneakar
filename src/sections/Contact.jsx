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

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_MAIN_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
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
    <section id="contact" className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="Contact"
          subtitle="Open to internships, entry-level roles, and freelance opportunities. I usually respond within 24 hours."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mt-12">
          
          {/* LEFT – INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 text-slate-600 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Ignite a Project</h3>
              <p className="leading-relaxed">
                If you’re hiring, collaborating, or just want to connect,
                feel free to reach out using the form or via email.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:sahiltarnekar2@gmail.com"
                className="group flex items-center gap-4 text-slate-700 transition-all"
              >
                <div className="p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <span className="font-medium group-hover:text-red-600 transition-colors">sahiltarnekar2@gmail.com</span>
              </a>

              <a
                href="https://github.com/sahiltarnekar"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-slate-700 transition-all"
              >
                <div className="p-3 bg-slate-100 text-slate-700 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <FaGithub size={20} />
                </div>
                <span className="font-medium group-hover:text-slate-900 transition-colors">github.com/sahiltarnekar</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-slate-700 transition-all"
              >
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </div>
                <span className="font-medium group-hover:text-orange-600 transition-colors">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm shadow-slate-200/50"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 resize-none focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/30 active:scale-95 transition-all disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className={`text-sm text-center font-medium mt-4 ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
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