"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-[#111318] dark:text-white">
          My Accounts
        </h1>
        <button className="
            group
            flex items-center gap-2
            bg-[#135bec] hover:bg-[#0d47a1]
            text-white font-bold text-sm
            px-5 py-2.5
            rounded-lg
            shadow-md shadow-blue-500/30 hover:shadow-blue-500/50
            transition-all duration-200 ease-out
            transform hover:-translate-y-0.5 hover:scale-102 active:scale-98
            relative
        ">
        {/* The Plus Icon (Animated) */}
        <span className="text-base leading-none transition-all duration-200 group-hover:rotate-90">
            +
        </span>
        
        <span className="relative z-10 transition-all duration-200">Link Bank</span>
        </button>
      </div>

      <div className="bg-white dark:bg-[#1e2330] p-8 rounded-xl border border-gray-100 dark:border-[#2a3241] shadow-sm text-center">
        <p className="text-gray-500">You haven't linked any bank accounts yet.</p>
      </div>
    </div>
  );
}