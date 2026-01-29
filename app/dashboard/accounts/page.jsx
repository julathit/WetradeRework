import React from 'react';

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-[#111318] dark:text-white">
          My Accounts
        </h1>
        <button className="bg-[#135bec] text-white px-4 py-2 rounded-lg font-bold text-sm">
          + Link Bank
        </button>
      </div>

      <div className="bg-white dark:bg-[#1e2330] p-8 rounded-xl border border-gray-100 dark:border-[#2a3241] shadow-sm text-center">
        <p className="text-gray-500">You haven't linked any bank accounts yet.</p>
      </div>
    </div>
  );
}