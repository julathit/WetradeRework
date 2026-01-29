import React from 'react';

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Card 1: Total Assets */}
      <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241]">
        <p className="text-[#616f89] dark:text-[#9ca3af] text-sm font-medium mb-1">Total Assets</p>
        <h3 className="text-2xl font-bold text-[#111318] dark:text-white">$452,384.20</h3>
        <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
          +12.4% from last year
        </p>
      </div>

      {/* Card 2: THB Cash */}
      <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241]">
        <p className="text-[#616f89] dark:text-[#9ca3af] text-sm font-medium mb-1">THB Cash Deposit</p>
        <h3 className="text-2xl font-bold text-[#111318] dark:text-white">฿1,240,000</h3>
        <p className="text-xs text-[#616f89] dark:text-[#9ca3af] mt-2">Active accounts: 3</p>
      </div>

      {/* Card 3: Tax Liability */}
      <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241]">
        <p className="text-[#616f89] dark:text-[#9ca3af] text-sm font-medium mb-1">Tax Liability Est.</p>
        <h3 className="text-2xl font-bold text-red-500">$18,450.00</h3>
        <p className="text-xs text-[#616f89] dark:text-[#9ca3af] mt-2">Next payment: Oct 15</p>
      </div>

      {/* Card 4: Pending Syncs */}
      <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241]">
        <p className="text-[#616f89] dark:text-[#9ca3af] text-sm font-medium mb-1">Pending Syncs</p>
        <h3 className="text-2xl font-bold text-[#111318] dark:text-white">2</h3>
        <p className="text-xs text-orange-500 font-medium mt-2">Manual update required</p>
      </div>
    </div>
  );
}