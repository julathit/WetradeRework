import { Input } from "@/components/ui/input";

export default function LoginFormSection() {
  return (
    <div className="flex w-full items-center justify-center bg-white p-8 dark:bg-background-dark lg:w-1/2 lg:p-16">
      <div className="w-full max-w-[480px]">
        {/* Mobile Logo */}
        <div className="mb-10 flex items-center gap-2 lg:hidden">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">
              account_balance
            </span>
          </div>
          <span className="text-xl font-black tracking-tight text-[#111318] dark:text-white">
            WeTax!
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-[#111318] dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-[#616f89] dark:text-gray-400">
            Please enter your credentials to access your account.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold leading-normal text-[#111318] dark:text-white">
              Email Address
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary">
                mail
              </span>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbdfe6] bg-white p-[15px] pl-12 text-base font-normal leading-normal text-[#111318] placeholder:text-[#616f89] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="name@company.com"
                required
                type="email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold leading-normal text-[#111318] dark:text-white">
                Password
              </label>
              {/* <a
                className="text-sm font-semibold text-primary hover:underline"
                href="#"
              >
                Forgot password?
              </a> */}
            </div>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary">
                lock
              </span>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbdfe6] bg-white p-[15px] pl-12 text-base font-normal leading-normal text-[#111318] placeholder:text-[#616f89] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your password"
                required
                type="password"
              />
            </div>
          </div>

          {/* Remember Me Checkbox */}
          {/* <div className="flex items-center gap-2">
            <input
              className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
              id="remember"
              type="checkbox"
            />
            <label
              className="text-sm font-medium text-[#616f89] dark:text-gray-400"
              htmlFor="remember"
            >
              Remember me for 30 days
            </label>
          </div> */}

          {/* Sign In Button */}
          <button
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-5 h-14 text-base font-bold leading-normal tracking-[0.015em] text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "#135bec", boxShadow: "0 10px 25px rgba(19, 91, 236, 0.3)" }}
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8 flex items-center gap-4 text-gray-300">
          <hr className="flex-1 dark:border-gray-700" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Or continue with
          </span>
          <hr className="flex-1 dark:border-gray-700" />
        </div>

        {/* Google Sign In */}
        {/* <div className="mt-8 grid grid-cols-1 gap-4">
          <button className="flex items-center justify-center gap-3 rounded-lg border border-[#dbdfe6] bg-white h-12 px-4 text-sm font-bold text-[#111318] hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <img
              alt="Google"
              className="size-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPr8F0f8QY_rhO499q_sZD89o2IRX8lwUdkHS-518caWWlMvG3B7LFRZ8zbKgUQ67zLG5hc2fZKtVBsG5y7t-X9X1CUSKrtJlPG5C1nFroaRnEuHkSaD9f1qVIi6XeF8JZ2FRr-zP8y9o9f9fURUFz3LoswWascnHNdDs9vJWJjrxXZMVY90S0hcThz22VhSwYyFZgUvNLCa4fLuuB232qrpseN8WQgknHqz8K9RwTI0sJuXcJiOY_XRh5SVeLLGXYkXPddgkCqj69"
            />
            Sign in with Google
          </button>
        </div> */}

        {/* Sign Up Link */}
        <p className="mt-10 text-center text-sm font-medium text-[#616f89] dark:text-gray-400">
          Don't have an account?
          <a
            className="text-primary hover:underline font-bold ml-1"
            href="#"
          >
            Sign up for free
          </a>
        </p>

        {/* Footer Links */}
        <div className="mt-12 flex justify-center gap-6 text-xs font-medium text-gray-400">
          <a className="hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary" href="#">
            Support
          </a>
        </div>
      </div>
    </div>
  );
}
