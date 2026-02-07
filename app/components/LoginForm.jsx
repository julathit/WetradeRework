export default function LoginForm() {
  return (
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
          <a className="text-sm font-semibold text-primary hover:underline" href="#">
            Forgot password?
          </a>
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
      <div className="flex items-center gap-2">
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
      </div>

      {/* Sign In Button */}
      <button
        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 h-14 text-base font-bold leading-normal tracking-[0.015em] text-white shadow-lg shadow-primary/30 transition-all hover:bg-blue-700 active:scale-[0.98]"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
