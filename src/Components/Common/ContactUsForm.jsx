import React, { useRef, forwardRef } from "react";
import emailjs from "@emailjs/browser";

import clsx from "clsx";

// Components
import Line from "./Line";
import Button from "./Buttons/Button";

const ContactUsForm = forwardRef(({ className, ...props }, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_izdpumn", "template_vaf3pcg", form.current, {
        publicKey: "YW-IwfkNSb58sbA1H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "w-full xl:w-[560px] bg-gradient-to-b from-[#11162E] to-[#090B15] border border-[#3C4BBF40] rounded-[24px] lg:rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(43,179,255,.15)]",
        className,
      )}
      {...props}
    >
      <h2 className="mb-5 text-center text-3xl font-bold text-white lg:text-[42px]">
        Connect With Our Experts
      </h2>

      <Line className="mx-auto mb-8 lg:mb-10" />

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <div className="w-full flex justify-center items-center gap-6">
          {/* Name  */}
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-white">
              Name <span className="text-red-500">*</span>
            </label>

            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
            />
          </div>

          {/* Company */}
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-white">
              Company <span className="text-gray-400">(Optional)</span>
            </label>

            <input
              name="company"
              type="text"
              placeholder="Company name"
              defaultValue=""
              className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-6">
          {/* Number */}
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-white">
              Mobile Number <span className="text-red-500">*</span>
            </label>

            <input
              name="phone"
              type="tel"
              required
              placeholder="Enter mobile number"
              className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-white">
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="Enter email address"
              className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
            />
          </div>
        </div>

        <div className="relative">
          {/* Services */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Service <span className="text-red-500">*</span>
            </label>

            <select
              name="service"
              required
              defaultValue=""
              className="h-14 w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] px-5 text-white outline-none transition focus:border-[#2BB3FF]"
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="SEO">SEO</option>
              <option value="App Development">App Development</option>
              <option value="Website Designing">Website Designing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Website Development">Website Development</option>
            </select>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-white">
              Description <span className="text-gray-400">(Optional)</span>
            </label>

            <textarea
              name="message"
              rows={5}
              defaultValue=""
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-[#3C4BBF60] bg-[#0F1327] p-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#2BB3FF]"
            />
          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-center">
            <Button
              variant="filled"
              uppercase={false}
              className="cursor-pointer"
            >
              Submit Now
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default ContactUsForm;
