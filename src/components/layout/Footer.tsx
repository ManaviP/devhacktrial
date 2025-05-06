import { Link } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-hackathon-navy text-white border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-gray-400 mb-2">📧 Email: dsudevhack@dsu.edu.in</p>
            <p className="text-gray-400 mb-2">📞 Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">📍 DSU main campus, Harohalli, Ramanagara, Karnataka, India</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400" aria-label="X (formerly Twitter)" title="X (formerly Twitter)">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400" aria-label="Discord" title="Discord">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400" aria-label="Instagram" title="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="GitHub" title="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400" aria-label="YouTube" title="YouTube">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400" aria-label="Google Maps" title="Google Maps">
                <FaMapMarkerAlt size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Hackathon Venue</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/code-of-conduct" className="text-gray-400 hover:text-white">
                  Dayananda Sagar University Harohalli
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Bangalore, Karnataka 562112
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DEVHACK. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
