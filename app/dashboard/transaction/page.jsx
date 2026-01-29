import React from 'react';
import TransactionView from '../../components/TransactionView';

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 mb-6">
        <h1 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Transactions</h1>
      </div>
      
      {/* Insert the Interactive Part */}
      <TransactionView />
    </>
  );
}