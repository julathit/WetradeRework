import React from 'react';

export default function RecentTransactions() {
  return (
    <div className="bg-white dark:bg-[#1e2330] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241] overflow-hidden">
      {/* Table Header / Filters */}
      <div className="p-6 border-b border-[#f0f2f4] dark:border-[#2a3241] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-[#111318] dark:text-white">Recent Transactions</h2>
          <p className="text-sm text-[#616f89] dark:text-[#9ca3af]">Activity across all connected accounts</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-[#f6f6f8] dark:bg-[#101622] border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[#135bec]/20 cursor-pointer min-w-[180px]">
            <option>All Accounts</option>
            <option>Kasikorn Bank (TH)</option>
            <option>Chase Bank (US)</option>
            <option>Binance Wallet</option>
          </select>
          <button className="bg-[#135bec] text-white text-sm font-bold h-10 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">add</span>
            New
          </button>
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1a1f2b]">
              <th className="px-6 py-4 text-xs font-bold text-[#616f89] dark:text-[#9ca3af] uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-[#616f89] dark:text-[#9ca3af] uppercase tracking-wider">Account</th>
              <th className="px-6 py-4 text-xs font-bold text-[#616f89] dark:text-[#9ca3af] uppercase tracking-wider">Description</th>
              <th className="px-6 py-4 text-xs font-bold text-[#616f89] dark:text-[#9ca3af] uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-[#616f89] dark:text-[#9ca3af] uppercase tracking-wider text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2a3241]">
            {[
              { date: 'Sep 24, 2023', bank: 'Chase Bank', desc: 'Dividend Payment - AAPL', type: 'Income', amount: '+$1,450.00', color: 'green' },
              { date: 'Sep 22, 2023', bank: 'Kasikorn Bank', desc: 'Fixed Deposit Interest', type: 'Income', amount: '+฿12,400.00', color: 'green' },
              { date: 'Sep 20, 2023', bank: 'Binance Wallet', desc: 'ETH Purchase', type: 'Exchange', amount: '0.85 ETH', color: 'blue' },
              { date: 'Sep 18, 2023', bank: 'Chase Bank', desc: 'Management Fees', type: 'Expense', amount: '-$25.00', color: 'red' },
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-[#1a1f2b] transition-colors">
                <td className="px-6 py-4 text-sm text-[#111318] dark:text-white font-medium">{item.date}</td>
                <td className="px-6 py-4 text-sm text-[#616f89] dark:text-[#9ca3af]">{item.bank}</td>
                <td className="px-6 py-4 text-sm text-[#111318] dark:text-white">{item.desc}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                    item.color === 'green' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    item.color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {item.type}
                  </span>
                </td>
                <td className={`px-6 py-4 text-sm font-bold text-right ${
                  item.color === 'green' ? 'text-green-600' : 
                  item.color === 'red' ? 'text-red-600' : 
                  'text-[#111318] dark:text-white'
                }`}>
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Link */}
      <div className="p-6 text-center border-t border-[#f0f2f4] dark:border-[#2a3241]">
        <a className="text-sm font-bold text-[#135bec] hover:text-blue-700 transition-colors" href="/transactions">
          View All Transactions
        </a>
      </div>
    </div>
  );
}