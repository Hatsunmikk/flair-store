import { useState } from "react";
import Modal from "./Modal"; 

function Footer() {
  const [modalType, setModalType] = useState(null);
  const handleClose = () => setModalType(null);

  const privacyContent = (
    <>
      <p>We value your privacy. We collect minimal personal data (like your email) to enhance your shopping experience.</p>
      <p>Your information is stored securely and never shared with third parties without consent.</p>
    </>
  );

  const termsContent = (
    <>
      <p>By using FlairStore, you agree to not misuse the site or engage in prohibited activities.</p>
      <p>Product availability, pricing, and services may change without prior notice.</p>
    </>
  );

  return (
    <>
      <footer className="bg-[#EEF1DA] text-[#333] py-10 border-t border-[#C7D9DD] mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Logo + About */}
          <div>
            <div className="text-2xl font-bold text-[#ADB2D4] mb-2">FlairStore</div>
            <p className="text-[#555] leading-relaxed mb-4">
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,
              eu vulputate magna eros eu erat.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span className="text-[#3B82F6] font-semibold">+0123 456 789</span>
            </div>
            <p className="text-xs mt-1 text-[#555]">Got Questions? Call us 24/7</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-[#ADB2D4] mb-2">Useful Links</h3>
            <ul className="space-y-1 text-[#444]">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Services</a></li>
              <li><a href="#" className="hover:underline">How to Shop</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-[#ADB2D4] mb-2">Customer Service</h3>
            <ul className="space-y-1 text-[#444]">
              <li><a href="#" className="hover:underline">Payment Methods</a></li>
              <li><a href="#" className="hover:underline">Money-back Guarantee</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li>
                <button
                  onClick={() => setModalType("terms")}
                  className="hover:underline text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("privacy")}
                  className="hover:underline text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-semibold text-[#ADB2D4] mb-2">My Account</h3>
            <ul className="space-y-1 text-[#444]">
              <li><a href="#" className="hover:underline">Sign In</a></li>
              <li><a href="#" className="hover:underline">View Cart</a></li>
              <li><a href="#" className="hover:underline">My Wishlist</a></li>
              <li><a href="#" className="hover:underline">Track My Order</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-[#D5E5D5] pt-4 text-center text-xs text-[#666]">
          <p>Copyright © 2025 FlairStore. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-2 text-[#444]">
            <a href="#" className="hover:text-[#ADB2D4]">Facebook</a>
            <a href="#" className="hover:text-[#ADB2D4]">Instagram</a>
            <a href="#" className="hover:text-[#ADB2D4]">Twitter</a>
            <a href="#" className="hover:text-[#ADB2D4]">Pinterest</a>
          </div>
        </div>
      </footer>

      {modalType === "privacy" && (
        <Modal title="Privacy Policy" content={privacyContent} onClose={handleClose} />
      )}
      {modalType === "terms" && (
        <Modal title="Terms & Conditions" content={termsContent} onClose={handleClose} />
      )}
    </>
  );
}

export default Footer;


