import Link from "next/link";
import { Lock } from "lucide-react";

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Lock className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Access Denied
        </h1>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          You do not have permission to view this page. <br />
          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            Only admins
          </span>{" "}
          can access this section.
        </p>

        {/* Extra Explanation */}
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          If you think this is an error, contact the administrator or return to
          the homepage.
        </p>

        {/* Back Button */}
        <Link
          href="/homepage"
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
