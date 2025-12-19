"use client";

import { ThemeToggle } from "../lib/theme/ThemeToggle";

export default function TemplateDemoPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Theme Toggle - Fixed position top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <h1 className="text-3xl font-bold mb-4">Reactr Template Demo</h1>
      <p className="text-lg mb-4">A basic template showing Reactr&apos;s design patterns and component usage!</p>
      <p className="text-lg mb-4">You can visit this page at <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/example</code></p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Reactr Platform Features:</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>✅ Creator offerings and supporter requests</li>
          <li>✅ Cross-platform integration (Patreon, Twitch, YouTube, Discord)</li>
          <li>✅ Dynamic pricing and request limits</li>
          <li>✅ Live stream interaction queues</li>
          <li>✅ Theme toggle for light/dark mode</li>
        </ul>
      </div>
    </div>
  );
}
