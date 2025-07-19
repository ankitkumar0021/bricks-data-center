// 'use client'
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { 
//       name: 'Web Hosting', 
//       href: '/web-hosting',
//       subItems: ['Shared', 'WordPress', 'Reseller']
//     },
//     { 
//       name: 'Cloud', 
//       href: '/cloud',
//       subItems: ['Public Cloud', 'Private Cloud']
//     },
//     { 
//       name: 'VPS', 
//       href: '/vps',
//       subItems: ['Managed', 'Unmanaged']
//     },
//     { name: 'Dedicated Server', href: '/dedicated' },
//     { name: 'GPU Cloud', href: '/gpu-cloud' }
//   ];

//   return (
//     <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="bg-blue-500 w-10 h-10 rounded-md flex items-center justify-center">
//               <span className="font-bold text-xl">B</span>
//             </div>
//             <span className="text-2xl font-bold">
//               <span className="text-blue-400">Bricks</span> Data Center
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <div key={index} className="group relative">
//                 <Link 
//                   href={item.href}
//                   className="py-2 hover:text-blue-400 transition flex items-center"
//                 >
//                   {item.name}
//                   {item.subItems && (
//                     <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                   )}
//                 </Link>
                
//                 {item.subItems && (
//                   <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
//                     {item.subItems.map((subItem, subIndex) => (
//                       <Link 
//                         key={subIndex} 
//                         href={`${item.href}/${subItem.toLowerCase().replace(' ', '-')}`}
//                         className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
//                       >
//                         {subItem}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <button className="px-4 py-2 text-blue-400 hover:text-blue-300 transition">
//               Client Login
//             </button>
//             <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="lg:hidden text-gray-300 hover:text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-gray-800 py-4 px-4 border-t border-gray-700">
//             <div className="flex flex-col space-y-3">
//               {navItems.map((item, index) => (
//                 <div key={index}>
//                   <Link 
//                     href={item.href}
//                     className="block py-2 hover:text-blue-400"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
                  
//                   {item.subItems && (
//                     <div className="ml-4 mt-1 space-y-2">
//                       {item.subItems.map((subItem, subIndex) => (
//                         <Link 
//                           key={subIndex} 
//                           href={`${item.href}/${subItem.toLowerCase().replace(' ', '-')}`}
//                           className="block py-1 text-gray-300 hover:text-blue-400"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {subItem}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               <div className="pt-4 flex space-x-4">
//                 <button className="px-4 py-2 text-blue-400 border border-blue-400 rounded-md">
//                   Client Login
//                 </button>
//                 <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { name: 'Home', href: '/' },
    { name: 'Web Hosting', href: '/web-hosting' },
    { name: 'Cloud', href: '/cloud' },
    { name: 'VPS', href: '/vps' },
    { name: 'Dedicated Server', href: '/dedicated' },
    { name: 'GPU Cloud', href: '/gpu-cloud' }
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-500 w-10 h-10 rounded-md flex items-center justify-center">
              <span className="font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-blue-400">Bricks</span> Data Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="py-2 hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <button className="px-4 py-2 text-blue-400 hover:text-blue-300 transition">
              Client Login
            </button> */}
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 py-4 px-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="block py-2 hover:text-blue-400 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button className="px-4 py-2 text-blue-400 border border-blue-400 rounded-md">
                  Client Login
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}