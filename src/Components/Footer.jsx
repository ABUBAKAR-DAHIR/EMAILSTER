import React from 'react';
import Wave from 'react-wavify'

export default function Footer() {
  return (
    <footer data-aos= "fade-up"  className="bg-[#e99b63] h-[60vh] flex justify-around lg:justify-evenly px-10 py-15 text-white">
  <div className="flex flex-col space-y-4">
    <h2 className="text-lg lg:text-xl font-semibold tracking-wide mb-4">Partners</h2>
    <a href="#" className="hover:underline text-gray">Partner One</a>
    <a href="#" className="hover:underline text-gray">Partner Two</a>
    <a href="#" className="hover:underline text-gray">Partner Three</a>
    <a href="#" className="hover:underline text-gray">Partner Four</a>
    <a href="#" className="hover:underline text-gray">Partner Five</a>
    <a href="#" className="hover:underline text-gray">Partner Six</a>
  </div>

  <div className="flex flex-col space-y-4">
    <h2 className="text-lg lg:text-xl font-semibold tracking-wide mb-4">Resources</h2>
    <a href="#" className="hover:underline">Blog</a>
    <a href="#" className="hover:underline">Tutorials</a>
    <a href="#" className="hover:underline">Webinars</a>
    <a href="#" className="hover:underline">Community</a>
    <a href="#" className="hover:underline">Support</a>
    <a href="#" className="hover:underline">Pricing</a>
  </div>

  <div className="flex flex-col space-y-4">
    <h2 className="text-lg xl:text-xl font-semibold tracking-wide mb-4">Documentation</h2>
    <a href="#" className="hover:underline text-gray">Getting Started</a>
    <a href="#" className="hover:underline">API Reference</a>
    <a href="#" className="hover:underline">Guides</a>
    <a href="#" className="hover:underline">Changelog</a>
    <a href="#" className="hover:underline">FAQ</a>
    <a href="#" className="hover:underline">Release Notes</a>
  </div>
</footer>

  );
}

{/* <div className='absolute bottom-0 left-0 w-full overflow-cli'>
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-amber-600 h-[50vh] w-full"></path>
  </svg>

</div>
This */}