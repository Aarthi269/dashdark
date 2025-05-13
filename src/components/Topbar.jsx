import { useState } from 'react';

export default function Topbar() {
  return (
    <div className="bg-[#0f0e37] px-6 mr-10 ml-8 py-4 flex justify-between rounded-lg items-center">
      <div className="flex items-center gap-4">
        <span className="text-white text-xl font-bold  mr-8">Users</span>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-md border border-gray-600 bg-[#1c1b4b] text-white focus:outline-none"
          />
          <span className="absolute left-3 top-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
