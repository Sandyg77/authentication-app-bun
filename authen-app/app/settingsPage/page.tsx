// File: app/settings/page.tsx

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link"; // For the back button

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // This effect handles redirection based on auth status and role
  useEffect(() => {
    // Don't do anything while the session is loading
    if (status === "loading") return;

    if (status === "unauthenticated" || session?.user?.role !== "admin") {
      // If the user is not authenticated OR they are not an admin, redirect them to the 'access-denied' page
      router.push("/accessDenied");
    }
  }, [session, status, router]);

  // While the session is loading or we're waiting for redirection,
  if (status === "loading" || session?.user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Verifying access...</p>
      </div>
    );
  }

  // If all checks pass, render the actual settings page content for the admin.
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="p-8 bg-white shadow-lg rounded-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800">Admin Settings 🔐</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome, Admin! You have exclusive access to this page.
        </p>
        <div className="mt-6 text-gray-600">
          <p>Here you can manage application settings, users, and more.</p>
        </div>
        <Link
          href="/homepage"
          className="mt-8 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
