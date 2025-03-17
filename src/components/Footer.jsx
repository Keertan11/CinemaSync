import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-teal-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHptMzAgMGwzMCAzMEwzMCA2MEwwIDMweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIi8+PC9zdmc+')] pattern-repeat" />
        </div>
        <div className="relative">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
            CinemaSync
          </h2>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-purple-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-purple-200/70">© 2024 CinemaSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
