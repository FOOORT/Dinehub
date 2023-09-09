import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-50 w-screen px-12 py-2 fixed bottom-0 left-0 flex justify-between z-50">
      <p className="flex gap-4 text-sm text-slate-400">
        &copy; 2023 Dinehub, Inc
      </p>
      <ul className="flex gap-8 text-sm text-slate-400">
        <li>Terms</li>
        <li>How we work</li>
        <li>Destination</li>
      </ul>
      <ul className="gap-8 text-sm text-slate-400 hidden lg:flex">
        <li>FAQ</li>
        <li>Privacy</li>
        <li>Support & Resources</li>
      </ul>
    </div>
  );
}

export default Footer
