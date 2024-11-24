import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-600 text-white py-8 w-full mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4 md:px-0">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <div className="text-3xl font-bold">Gebeya Shop</div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Discover</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="container mx-auto flex justify-center md:justify-start mt-4 gap-4 px-4 md:px-0">
        <a href="#" className="text-white text-xl hover:text-gray-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-300">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-300">
          <i className="fab fa-x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
