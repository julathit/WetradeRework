import React from 'react';
import DashboardStats from '@/app/components/DashboardStats';
import RecentTransactions from '@/app/components/RecentTransactions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
          <Select defaultValue="2023">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 1. The Stats Cards */}
      <DashboardStats />

      {/* 2. The Transactions Table */}
      <RecentTransactions />
    </>
  );
}