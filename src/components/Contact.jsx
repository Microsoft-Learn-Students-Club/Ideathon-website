import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg- flex flex-col items-center justify-center py-12 px-6"
    >
      {/* Header styled like "Prizes" */}
      <div className="flex items-center w-full max-w-6xl mb-10">
        <div className="flex-grow border-t-2 border-black"></div>
        <span className="mx-4 text-2xl md:text-3xl font-extrabold text-yellow">
          Reach Us
        </span>
        <div className="flex-grow border-t-2 border-black"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col gap-6 border-4 border-black bg-mint p-6 shadow-[8px_8px_0px_#001219] ">
          <h3 className="text-xl md:text-2xl font-bold text-black flex items-center gap-2">
            📍 Vidyavardhini's College of Engineering and Technology
          </h3>
          <p className="text-black leading-relaxed font-medium">
            K.T. Marg, Vartak College Campus, Vasai Road, Vasai-Virar,
            Maharashtra 401202
          </p>

          <h4 className="text-lg md:text-xl font-bold text-black mt-4 flex items-center gap-2">
            ☎️ For Enquiries:
          </h4>
          <ul className="space-y-2 text-black font-medium">
            <li>
              Aditya Trivedi:{" "}
              <a href="tel:+919764935361" className="underline text-maroon">
                +91 97649 35361
              </a>
            </li>
            <li>
              Tej More:{" "}
              <a href="tel:+919152566703" className="underline text-maroon">
                +91 91525 66703
              </a>
            </li>
          </ul>

          <p className="mt-4 font-medium">
            📧 Email:{" "}
            <a
              href="mailto:mlsc@vcet.edu.in"
              className="underline text-pastel-pink font-bold"
            >
              mlsc@vcet.edu.in
            </a>
          </p>
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
