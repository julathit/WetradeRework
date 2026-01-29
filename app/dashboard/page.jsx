import React from 'react';
import DashboardStats from '@/app/components/DashboardStats';
import RecentTransactions from '@/app/components/RecentTransactions';

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <h1 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
          Dashboard
        </h1>
        
        {/* Year Selector */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#616f89] dark:text-[#9ca3af]">Tax Year:</span>
          <select className="bg-white dark:bg-[#1e2330] border border-[#dbdfe6] dark:border-[#374151] rounded-lg text-sm px-3 py-1.5 focus:ring-[#135bec] focus:border-[#135bec] transition-all">
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
      </div>

      {/* 1. The Stats Cards */}
      <DashboardStats />

      {/* 2. The Transactions Table */}
      <RecentTransactions />
    </>
  );
}