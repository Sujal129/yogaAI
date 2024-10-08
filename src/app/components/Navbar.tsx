"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full  text-black p-4 bg-opacity-30 backdrop-blur-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">YogGuru</div>
          
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-gray-600">HOME</Link>
            {/* <Link href="/Login" className="hover:text-gray-600">SERVICES</Link> */}
            <Link href="https://www.linkedin.com/in/sujal-gupta-665377247/" className="hover:text-gray-600">ABOUT</Link>
            <Link href="mailto:sujalgupta9211@gmail.com" className="hover:text-gray-600">CONTACT</Link>
            {/* <Link href="/login" className="hover:text-gray-600">LOGIN</Link>
            <Link href="/signup" className="hover:text-gray-600">SIGN UP</Link> */}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-slide-down transition-all duration-300 ease-in-out">
            <Link href="/" className="block py-2 hover:text-gray-600">HOME</Link>
            {/* <Link href="/" className="block py-2 hover:text-gray-600">SERVICES</Link> */}
            <Link href="https://www.linkedin.com/in/harmanpreetsingh0013/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" className="block py-2 hover:text-gray-600">ABOUT</Link>
            <Link href="mailto:harmanpreetgirn@gmail.com" className="block py-2 hover:text-gray-600">CONTACT</Link>
            {/* <Link href="/login" className="block py-2 hover:text-gray-600">LOGIN</Link>
            <Link href="/signup" className="block py-2 hover:text-gray-600">SIGN UP</Link> */}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;


// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <nav className="bg-gray-900 text-white p-4 bg-opacity-30 backdrop-blur-lg animate-slide-down transition-all duration-300 ease-in-out">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold">GuruYog</div>
          
//           <div className="hidden md:flex space-x-4">
//             <Link href="/" className="hover:text-gray-400">HOME</Link>
//             <Link href="/services" className="hover:text-gray-400">SERVICES</Link>
//             <Link href="https://www.linkedin.com/in/harmanpreetsingh0013/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" className="hover:text-gray-400">ABOUT</Link>
//             <Link href="mailto:harmanpreetgirn@gmail.com" className="hover:text-gray-400">CONTACT</Link>
//           </div>

//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden mt-4 animate-slide-down transition-all duration-300 ease-in-out">
//             <Link href="/" className="block py-2 hover:text-gray-400">HOME</Link>
//             <Link href="/services" className="block py-2 hover:text-gray-400">SERVICES</Link>
//             <Link href="https://www.linkedin.com/in/harmanpreetsingh0013/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" className="block py-2 hover:text-gray-400">ABOUT</Link>
//             <Link href="mailto:harmanpreetgirn@gmail.com" className="block py-2 hover:text-gray-400">CONTACT</Link>
//             <Link href="/career" className="block py-2 hover:text-gray-400">CAREER</Link>
//           </div>
//         )}
//       </nav>
//     </div>
//   )
// }

// export default Navbar;
