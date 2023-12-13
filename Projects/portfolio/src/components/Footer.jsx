// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            Twitter
          </a>
          {/* Add more social media links as needed */}
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold mb-2">Contact Me</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          {/* Add more contact information as needed */}
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p>
            Hello! I'm Your Name, a passionate developer with a focus on
            creating amazing web applications.
          </p>
          {/* Add more about me information as needed */}
        </div>
        <div>
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
