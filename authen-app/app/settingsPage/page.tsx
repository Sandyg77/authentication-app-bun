// File: app/settings/page.tsx

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated" || session?.user?.role !== "admin") {
      router.push("/accessDenied");
    }
  }, [session, status, router]);

  if (status === "loading" || session?.user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <p className="text-gray-500 dark:text-gray-400 animate-pulse text-lg">
          Verifying access...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Admin Settings 🔐
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Welcome, Admin! You have exclusive access to this page. Manage users,
          settings, and more.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-2">User Management</h3>
            <p className="text-sm">
              Add, remove, or update user roles and permissions securely.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-2">Settings Control</h3>
            <p className="text-sm">
              Configure application settings, security policies, and features.
            </p>
          </div>
        </div>

        <Link
          href="/homepage"
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-blue-500/50 hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
