import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-hackathon-navy text-white border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-gray-400 mb-2">📧 Email: contact@devhacks.com</p>
            <p className="text-gray-400 mb-2">📞 Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">📍 123 Tech Boulevard, Silicon Valley, CA 94043</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/code-of-conduct" className="text-gray-400 hover:text-white transition duration-300">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DevHacks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
