

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
              src="/Orchid Logo New.png" 
              alt="Logo" 
              className="h-20 w-26 rounded-lg shadow-md object-cover" />
              {/* <span className="text-2xl font-bold text-red-700">Orchid</span>
              <span className="text-2xl font-bold text-yellow-500 ml-1">English</span>
              <span className="text-2xl font-bold text-yellow-500 ml-1">Secondary School</span> */}
            </div>
            <p className="text-red-800 mb-4">
              Nurturing Excellence, Building Futures. We are committed to providing quality education 
              that prepares students for success in academics, character, and life.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/orchidhsschool" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/orchidharion/" className="text-white hover:text-yellow-500 transition-colors duration-200" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/orchidhsschool" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">About Us</a></li>
              <li><a href="/courses" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">Courses</a></li>
              <li><a href="/notice" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">Notice</a></li>
              <li><a href="/admission" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">Admission</a></li>
              <li><a href="/contact" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">Contact</a></li>
              <li><a href="/blog" className="text-yellow-500 hover:text-red-800 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-800">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-red-800">Harion-11, Sarlahi</span>
                
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-red-800">046-530654</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-red-800">info@orchidschool.edu.np</span>
                
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            <span className="text-yellow-500">© 2025 Orchid English Secondary School. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;