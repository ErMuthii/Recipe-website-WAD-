import React from 'react';
import { Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className='hover:text-[#F6AB36]'>About Us</Link></li>
              <li><Link href="/recipes" className='hover:text-[#F6AB36]'>Recipes</Link></li>
              <li><Link href="/contact" className='hover:text-[#F6AB36]'>Contact Us</Link></li>
              <li><Link href="/faq" className='hover:text-[#F6AB36]'>FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className='hover:text-[#F6AB36]'>Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className='hover:text-[#F6AB36]'>Terms of Service</Link></li>
              <li><Link href="/cookies-policy" className='hover:text-[#F6AB36]'>Cookies Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>Email: info@flavoriz.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 456 Culinary Ave, Food City, FC 12345</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Flavoriz</h3>
            <p className="text-sm">&copy; {new Date().getFullYear()} Flavoriz. All rights reserved.</p>
            <p className="text-sm">Designed and developed by Flavoriz Team</p>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Flavoriz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
