'use client'; // 👈 This marks it as the "Interactive Island"

import React, { useState } from 'react';

export default function TransactionView() {
  const [activeTab, setActiveTab] = useState('US Assets');

  return (
    <>
      {/* Tabs */}
      <div className="mb-8 border-b border-[#dbdfe6] dark:border-[#374151]">
        <div className="flex gap-8">
          {['US Assets', 'Exchange'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-3 px-1 transition-colors cursor-pointer ${
                activeTab === tab 
                  ? 'border-[#135bec]' 
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <span className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === tab
                  ? 'text-[#111318] dark:text-white'
                  : 'text-[#616f89] dark:text-[#9ca3af]'
              }`}>
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Empty State / Content Area */}
      <div className="flex flex-col bg-white dark:bg-[#1e2330] rounded-xl shadow-sm border border-gray-100 dark:border-[#2a3241] min-h-[500px] justify-center">
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 p-8">
            <img 
              src="/empty-box.png" 
              alt="No transactions found" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </div>
          <h3 className="text-[#111318] dark:text-white text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] mb-3 max-w-[480px]">
            You don't have any tax account yet for {activeTab}.
          </h3>
          <p className="text-[#616f89] dark:text-[#9ca3af] text-sm md:text-base font-normal leading-normal mb-8 max-w-[480px]">
            Create a tax account to start tracking your assets and simplify your financial reporting.
          </p>
          <button className="group flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-[#135bec] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            {/* <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">add</span> */}
            <span>Add Transaction</span>
          </button>
        </div>
      </div>
    </>
  );
}