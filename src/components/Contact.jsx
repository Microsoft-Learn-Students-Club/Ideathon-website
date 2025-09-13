import React from "react";
import { MapPin, Phone, Mail } from "lucide-react"; // lucide icons

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-[50vh] flex flex-col items-center justify-center py-12 px-6 bg-yellow-50 pb-40"
    >
      <h2 className="flex mx-auto items-center text-3xl font-bold text-[var(--color-yellow)] uppercase mb-12 w-full max-w-3xl">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">Reach us</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col gap-3 border-4 border-black bg-mint p-6 shadow-[8px_8px_0px_#001219] ">
          <h3 className="text-xl md:text-2xl font-bold text-black flex items-center gap-2">
            <MapPin size={50} className="text-black" />
            Vidyavardhini's College of Engineering and Technology
          </h3>
          <p className="text-black leading-relaxed font-medium">
            K.T. Marg, Vartak College Campus, Vasai Road, Vasai-Virar,
            Maharashtra 401202
          </p>

          <h4 className="text-lg md:text-xl font-bold text-black mt-2 flex items-center gap-2">
            <Phone size={22} className="text-black" />
            For Enquiries:
          </h4>
          <ul className="space-y-1 text-black font-medium ">
            <li>
              Parth Raut:{" "}
              <a href="tel:+919224668114" className="underline text-maroon">
                +91 92246 68114
              </a>
            </li>
            <li>
              Sharvari Tathe:{" "}
              <a href="tel:+917770017919" className="underline text-maroon">
                +91 77700 17919
              </a>
            </li>
            <li>
              Gayatri Sabat:{" "}
              <a href="tel:+919890740720" className="underline text-maroon">
                +91 98907 40720
              </a>
            </li>
          </ul>

          <p className="text-lg md:text-xl font-bold text-black flex items-center gap-2">
            <Mail size={22} className="text-black" />
            <span>Email: </span>
          </p>
          <ul className="space-y-1 font-medium ">
            <li>
              <a
                href="mailto:parth.232473101@vcet.edu.in"
                className="underline text-[var(--color-maroon)] font-semibold text-sm lg:text-auto"
              >
                parth.232473101@vcet.edu.in
              </a>
            </li>
            <li>
              <a
                href="mailto:sharvari.232813201@vcet.edu.in"
                className="underline text-[var(--color-maroon)] font-semibold text-sm lg:text-auto"
              >
                sharvari.232813201@vcet.edu.in
              </a>
            </li>
            <li>
              <a
                href="mailto:gayatri.235396208@vcet.edu.in"
                className="underline text-[var(--color-maroon)] font-semibold text-sm lg:text-auto"
              >
                gayatri.235396208@vcet.edu.in
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Map */}
        <div className="border-4 border-black shadow-[8px_8px_0px_#001219] rounded-2xl overflow-hidden">
          <iframe
            title="VCET Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.659991421949!2d72.82615867523565!3d19.383869581885122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini's%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1701160672294!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ minHeight: "350px", border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
