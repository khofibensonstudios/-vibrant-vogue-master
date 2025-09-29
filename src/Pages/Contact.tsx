import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="bg-white dark:bg-black">
      <motion.div
        className="container mx-auto p-12 flex flex-col-reverse lg:flex-row gap-8 items-center justify-center text-black dark:text-gray-200 px-4 lg:px-0 xl:px-4 pb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full lg:w-1/2 h-[300px] lg:h-[400px] shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.642329689903!2d0.0029534749867201737!3d5.764500594217953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDUnNTIuMiJOIDDCsDAwJzE5LjkiRQ!5e0!3m2!1sen!2sgh!4v1742775811532!5m2!1sen!2sgh"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold">CONTACT INFO</h2>

          <div className="space-y-4">
            {[
              {
                Icon: FiMail,
                text: "vibrantvogue21@gmail.com",
                link: "mailto:vibrantvogue21@gmail.com",
              },
              {
                Icon: FiPhone,
                text: "+233 24 274 9215",
                link: "tel:+233242749215",
              },
              {
                Icon: FaWhatsapp,
                text: "+233 24 274 9215",
                link: "https://wa.me/233242749215",
              },
              {
                Icon: FaInstagram,
                text: "@vibrant_vogue_",
                link: "https://www.instagram.com/vibrant_vogue_",
              },
            ].map(({ Icon, text, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Icon className="text-appOrange w-6 h-6" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {text}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
