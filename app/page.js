import { redirect } from 'next/navigation';

export default function Home() {
  // Since you haven't built auth yet, we just redirect everyone 
  // to the dashboard for now.
  redirect('/login');
}