"use client";

import LoginBranding from "../components/LoginBranding";
import LoginFormSection from "../components/LoginFormSection";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <LoginBranding />
      <LoginFormSection />
    </div>
  );
}
