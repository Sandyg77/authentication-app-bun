"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }
  // Only tender this page if user is authenticated
  if (status === "authenticated") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                AuthApp
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition duration-200 transform hover:scale-105"
              >
                Sign Out
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mt-4 mb-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 ">
                  Welcome to the Future of Authentication
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Secure & Simple
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Authentication
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience seamless login with modern security features. Built
                with NextAuth.js and powered by cutting-edge technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-blue-500/50 hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Secure by Default
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Industry-standard encryption and security protocols to keep
                  your data safe.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized performance with Next.js 14 and modern web
                  technologies.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Beautiful UI
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Stunning design with smooth animations and dark mode support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className=" bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 AuthApp. Built using Next.js and Bun.
            </p>
          </div>
        </footer>
      </div>
    );
  }
  return null;
}
