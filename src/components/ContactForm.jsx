import React, { useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const clearStatus = () => {
    setTimeout(() => setStatusMessage(""), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", { method: "POST", body: formData })
      .then(() => {
        setStatusMessage("Form submission successful!");
        form.reset();
        clearStatus();
      })
      .catch((error) => {
        setStatusMessage(`Form submission failed: ${error}`);
        clearStatus();
      });
  };

  return (
    <Section bg="bg-white" text="text-textBlack">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side (Contact Info) */}
          <div>
            <SectionHeader
              sectionName="Contact"
              sectionHeader="Contact Us"
              sectionDesc="Please fill out the form below with your details. Our team will contact you promptly to discuss your plumbing needs and arrange a service that fits your schedule. We're here to assist with any issues, ensuring a quick and efficient resolution."
              centre={false}
            />

            <ul className="mt-4 space-y-4 text-black-300">
              <li className="flex items-center">
                <i className="bi bi-envelope-fill mr-3 text-xl"></i>
                <a href="mailto:plumbing@lightwatergroup.com.au">plumbing@lightwatergroup.com.au</a>
              </li>
              <li className="flex items-center">
                <i className="bi bi-geo-alt-fill mr-3 text-xl"></i>
                Sydney, NSW
              </li>
              <li className="flex items-center">
                <i className="bi bi-telephone-fill mr-3 text-xl"></i>
                <a href="tel:#0432 147 251">0432 147 251</a>
              </li>
            </ul>
          </div>

          {/* Right Side (Form) */}
          <div className="bg-primary rounded-xl text-textWhite shadow-xl 2xl:p-12 lg:p-10 md:p-8 p-6 font-supreme">
            <h2 className="text-3xl font-bold font-supreme-bold mb-4">
              Claim $50 Off Your First Service
            </h2>

            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: "none" }}>
                <input name="bot-field" />
              </p>

              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full py-4 px-2 placeholder-textWhite bg-transparent border-b-2 border-white outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full py-4 px-2 placeholder-textWhite bg-transparent border-b-2 border-white outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                className="w-full py-4 px-2 placeholder-textWhite bg-transparent border-b-2 border-white outline-none"
              />

              <textarea
                name="message"
                placeholder="Inquiry*"
                required
                className="w-full py-4 px-2 placeholder-textWhite bg-transparent border-b-2 border-white outline-none h-32 resize-none"
              />

              <div data-netlify-recaptcha="true"></div>

              <button
                type="submit"
                className="w-full hover:bg-black hover:text-white font-semibold py-4 rounded-lg bg-white text-black transition duration-200"
              >
                Send Inquiry
              </button>

              {statusMessage && (
                <div className="mt-4 text-center font-semibold text-white">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
