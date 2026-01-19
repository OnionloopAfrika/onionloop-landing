"use client"

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-8 space-y-6">
        {/* Newsletter */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h3 className="text-lg font-bold text-(--primary) mb-2">Join our newsletter</h3>
          <p className="text-sm text-(--text-tertiary) mb-4">Get all the latest Onionloop news delivered to your inbox.</p>
          <div className="flex gap-2 border border-gray-300 rounded-lg">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-3 text-sm"
            />
            <button className="px-4 py-3 bg-(--primary) text-white text-sm font-medium rounded-lg hover:bg-[#0a5a31] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Product */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                QR Payment
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Wallet & Transaction History
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Report & Insight
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="pb-6 border-b border-dotted border-gray-300">
          <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Connect with us</h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-[#0a5a31]"
            >
              <span className="text-sm">f</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-[#0a5a31]"
            >
              <span className="text-sm">𝕏</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-[#0a5a31]"
            >
              <span className="text-sm">@</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-[#0a5a31]"
            >
              <span className="text-sm">in</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-dotted border-gray-300">
          <div className="text-sm font-normal text-(--text-tertiary) mb-2">Onionloop</div>
          <p className="text-xs text-gray-600">© 2026 Onionloop. All rights reserved.</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col justify-between items-start gap-12 pb-8 border-b border-dotted border-gray-300">
        <div className="w-full flex items-center justify-between">
            {/* Newsletter */}
          <div className="max-w-sm">
            <h3 className="text-lg font-bold text-(--primary) mb-2">Join our newsletter</h3>
            <p className="text-sm text-(--text-tertiary) mb-4">Get all the latest Onionloop news delivered to your inbox.</p>
          </div>

          {/* Newsletter Input */}
          <div className="flex gap-2 border border-gray-300 rounded-lg">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-3 text-sm"
            />
            <button className="px-4 py-3 bg-(--primary) text-white text-sm font-medium rounded-lg hover:bg-[#0a5a31] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>


          {/* Links Columns */}
          <div className=" w-full grid grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    QR Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Wallet & Transaction History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Report & Insight
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-normal text-(--text-tertiary) mb-3">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-(--text-tertiary) hover:text-(--primary) font-semibold">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-8">
          <div>
            <div className="text-sm font-normal text-(--text-tertiary) mb-1">Onionloop</div>
            <p className="text-xs text-gray-600">© 2026 Onionloop. All rights reserved.</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-(--text-tertiary)">Connect with us</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <span className="text-sm">𝕏</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <span className="text-sm">@</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-(--primary) rounded-full flex items-center justify-center text-white hover:bg-(--primary)/20 transition-colors"
              >
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
