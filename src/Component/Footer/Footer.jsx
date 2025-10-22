import React from 'react'

function Footer() {
  return (
    <>
      <footer
        className="bg-gradient-to-r from-amber-200 via-pink-200 to-rose-300 border-t-2 border-black text-gray-900 py-8 px-6  border-2"
        style={{ fontFamily: 'Dancing Script', letterSpacing: 2 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">

          {/* Brand Section */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-2">Floral Love 🤍</h2>
            <p className="text-lg">
              Where fragrance meets emotion,
              bringing elegance, beauty, and love together.
            </p>
          </div>

          {/*  Quick Links */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end space-y-3">
            <h3 className="text-2xl font-semibold mb-1 text-center md:text-right">
              Follow Us For More Updates
            </h3>

            {/* icons start below */}
            <div className="gap-16 py-5 text-gray-700  justify-items-center grid grid-cols-2 sm:grid-cols-4">
              <a href="#" className="hover:text-pink-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-9 h-9 border-2 "
                  viewBox="0 0 24 24" >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>


              <a href="#" className="hover:text-pink-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-9 h-9 border-2 "
                  viewBox="0 0 24 24" >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              <a href="#" className="hover:text-pink-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-9 h-9 border-2 "
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>

              <a href="#" className="hover:text-pink-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-9 h-9 border-2 "
                  viewBox="0 0 24 24" >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </div>

            <p className="text-gray-700 text-sm mt-2">
              © 2025 Floral Love. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
