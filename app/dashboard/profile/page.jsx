"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
          Profile Settings
        </h1>
        <p className="text-[#616f89] dark:text-[#9ca3af] mt-1">
          Manage your account information and security preferences
        </p>
      </div>

      <div className="space-y-6">
        <section className="bg-white dark:bg-[#1e2330] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241] overflow-hidden">
          <div className="p-6 border-b border-[#f0f2f4] dark:border-[#2a3241]">
            <h2 className="text-lg font-bold text-[#111318] dark:text-white">
              Personal Information
            </h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name">Full Name</label>
                  <Input
                    id="full_name"
                    placeholder="John Doe"
                    type="text"
                    // defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <Input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    // defaultValue="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="country">Country of Residence</label>
                  <Select>
                    <SelectTrigger className="bg-white dark:bg-[#1e2330] border border-[#dbdfe6] dark:border-[#374151] rounded-lg text-sm px-4 py-2.5 focus:ring-[#135bec] focus:border-[#135bec] transition-all w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="th">Thailand</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-[#135bec] text-white text-sm font-bold h-10 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-[#1e2330] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3241] overflow-hidden">
          <div className="p-6 border-b border-[#f0f2f4] dark:border-[#2a3241]">
            <h2 className="text-lg font-bold text-[#111318] dark:text-white">
              Security
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-sm font-bold text-[#111318] dark:text-white mb-4">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs block text-sm font-semibold text-[#111318] dark:text-white mb-2" htmlFor="current_password">
                      Current Password
                    </label>
                    <Input
                      id="current_password"
                      type="password"
                    />
                  </div>
                  <div>
                    <label className="text-xs block text-sm font-semibold text-[#111318] dark:text-white mb-2" htmlFor="new_password">
                      New Password
                    </label>
                    <Input
                      id="new_password"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111318] dark:text-white mb-4">
                  Confirm Old Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs block text-sm font-semibold text-[#111318] dark:text-white mb-2" htmlFor="old_password">
                      Old Password
                    </label>
                    <Input
                      id="old_password"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-[#135bec] text-white text-sm font-bold h-10 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
