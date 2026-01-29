'use client';

import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
      {[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Transactions', href: '/dashboard/transaction' },
        { label: 'Accounts', href: '/dashboard/accounts' },
        { label: 'Profile', href: '/dashboard/profile' },
      ].map((link) => {
        const isActive = pathname === link.href;
        return (
          <a
            key={link.label}
            href={link.href}
            className={`text-sm font-medium leading-normal transition-colors relative ${
              isActive
                ? 'text-[#135bec] dark:text-white font-bold after:content-[\'\'] after:absolute after:-bottom-5 after:left-0 after:w-full after:h-[2px] after:bg-[#135bec]'
                : 'text-[#616f89] dark:text-[#9ca3af] hover:text-[#135bec] dark:hover:text-[#135bec]'
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
