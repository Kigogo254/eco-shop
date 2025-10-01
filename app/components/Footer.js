
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 px-4 text-sm sm:text-base">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-0">

        {/* Top Grid: Contact + Reviews + Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-yellow-400 text-base sm:text-lg font-semibold mb-2">Contact Us</h3>
            <p>Eco-Shop</p>
            <p>123 Green Street</p>
            <p>Nairobi, Kenya</p>
            <p className="mt-2">Phone: <span className="text-yellow-400">+254 712 345 678</span></p>
            <p>Email: <span className="text-yellow-400">support@eco-shop.com</span></p>
          </div>

          {/* Reviews */}
          <div className="text-left sm:text-right">
            <h3 className="text-yellow-400 text-base sm:text-lg font-semibold mb-2">What People Say</h3>
            <p className="italic">&quot;Best eco-friendly products ever!&quot;</p>
            <p className="italic">&quot;Fast delivery and great service.&quot;</p>
            <p className="italic">&quot;Will shop here again!&quot;</p>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left md:text-center">
            <h3 className="text-yellow-400 text-base sm:text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-center sm:justify-start gap-6 text-xl sm:text-2xl mt-2">
              <Link href="#" className="hover:text-yellow-400 transition"><FaFacebook /></Link>
              <Link href="#" className="hover:text-yellow-400 transition"><FaTwitter /></Link>
              <Link href="#" className="hover:text-yellow-400 transition"><FaInstagram /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-400 mt-6 pt-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Eco-Shop. All rights reserved.
      </div>
    </footer>
  );
}
