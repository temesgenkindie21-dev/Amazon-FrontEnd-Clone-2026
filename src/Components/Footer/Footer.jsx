import React from "react";
import { Link } from "react-router-dom";
import UnitedStatesFlag from "../../assets/united_states_flag.png";

function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#232f3e] text-white">
      {/* Back to Top */}
      <button
        onClick={backToTop}
        className="w-full bg-[#37475a] py-4 text-center text-sm hover:bg-[#485769]"
      >
        Back to top
      </button>

      {/* Footer Links */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Get to Know Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-xl">Get to Know Us</h3>

          <ul className="space-y-3 text-lg text-gray-300">
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:underline">
                About Amazon
              </Link>
            </li>

            <li>
              <Link to="/investor-relations" className="hover:underline">
                Investor Relations
              </Link>
            </li>
          </ul>
        </div>

        {/* Make Money with Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-xl">Make Money with Us</h3>

          <ul className="space-y-3 text-lg text-gray-300">
            <li>
              <Link to="/sell-products" className="hover:underline">
                Sell products on Amazon
              </Link>
            </li>

            <li>
              <Link to="/affiliate" className="hover:underline">
                Become an Affiliate
              </Link>
            </li>

            <li>
              <Link to="/advertise" className="hover:underline">
                Advertise Your Products
              </Link>
            </li>

            <li>
              <Link to="/business" className="hover:underline">
                Sell on Amazon Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Payment Products */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-xl">Amazon Payment Products</h3>

          <ul className="space-y-3 text-lg text-gray-300">
            <li>
              <Link to="/payment-options" className="hover:underline">
                Payment Options
              </Link>
            </li>

            <li>
              <Link to="/credit-card" className="hover:underline">
                Credit Card Marketplace
              </Link>
            </li>

            <li>
              <Link to="/amazon-visa" className="hover:underline">
                Amazon Visa
              </Link>
            </li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-xl">Let Us Help You</h3>

          <ul className="space-y-3 text-lg text-gray-300">
            <li>
              <Link to="/account" className="hover:underline">
                Your Account
              </Link>
            </li>

            <li>
              <Link to="/orders" className="hover:underline">
                Your Orders
              </Link>
            </li>

            <li>
              <Link to="/shipping" className="hover:underline">
                Shipping Rates & Policies
              </Link>
            </li>

            <li>
              <Link to="/returns" className="hover:underline">
                Returns & Replacements
              </Link>
            </li>

            <li>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600" />

      {/* Logo and Options */}
      <div className="flex flex-col items-center justify-center gap-5 px-6 py-8 sm:flex-row">
        <Link to="/" className="text-3xl font-bold">
          amazon<span className="text-[#ff9900]">⌁</span>
        </Link>

        <button className="rounded border border-gray-500 px-5 py-2 text-sm hover:border-white">
          🌐 English
        </button>

        <button className="rounded border border-gray-500 px-5 py-2 text-sm hover:border-white">
          💵 USD - U.S. Dollar
        </button>

        <button className="rounded border border-gray-500 px-5 py-2 text-sm hover:border-white flex gap-[4px]">
          <img src={UnitedStatesFlag} alt="" className="w-[25px]" />
          <span> United States</span>
        </button>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#131a22] px-6 py-6 text-center text-sm text-gray-400">
        <div className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/conditions" className="hover:underline">
            Conditions of Use
          </Link>

          <Link to="/privacy" className="hover:underline">
            Privacy Notice
          </Link>

          <Link to="/ads-privacy" className="hover:underline">
            Your Ads Privacy Choices
          </Link>
        </div>

        <p>© 2026 Your Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
