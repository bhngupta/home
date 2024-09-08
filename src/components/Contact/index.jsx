import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('Failed to send the email.', error.text);
          alert('Failed to send the email.');
        }
      );

    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div
      name="contact"
      className="bg-[#F4F9FC] py-16 w-full h-auto min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-5xl font-bold text-navy-blue mb-2 text-with-shadow font-bitter"
            data-aos="fade-up"
          >
            Contact Me<span className="text-cyan-green">.</span>
          </h2>
          <div className="h-1 bg-cyan-green w-16 mx-auto mb-8"></div>
        </div>

        {/* Contact Form */}
        <div
          className="w-full max-w-5xl mx-auto bg-white p-10 lg:p-16 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <form method="POST" action="https://getform.io/f/adrypxda">
            <p className="text-navy-blue pt-2 pb-4">
              Submit the form below or shoot me an email at:{' '}
              <a
                href="mailto:bhanuvkgupta@gmail.com"
                target="_blank"
                className="font-bold text-[#73bbc5] hover:text-navy-blue transition-all"
              >
                bhanuvkgupta@gmail.com
              </a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-left text-navy-blue font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue focus:border-blue-400 transition-colors duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-left text-navy-blue font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue focus:border-blue-400 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-left text-navy-blue font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue focus:border-blue-400 transition-colors duration-300"
                rows="10"
                style={{ resize: 'none' }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
