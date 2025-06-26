import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-600">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 NestMate Avenue, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>support@nestmate.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+880 1612-163711</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-base-200 p-6 rounded-xl shadow-md">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
