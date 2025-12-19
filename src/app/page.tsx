"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./lib/theme/ThemeToggle";

export default function Home() {
  const demoGroups = [
    {
      title: "Creator Experience",
      description: "Dashboard, analytics, and offering management tools for content creators",
      demos: [
        {
          title: "Creator Dashboard v1",
          description: "Manage offerings, track requests, monitor revenue, and engage with supporters across all platforms",
          href: "/creator/dashboard/demo1",
          status: "Latest",
          color: "bg-blue-500"
        },
        {
          title: "Supporter Management",
          description: "Organize supporters into groups, set custom limits, and manage cross-platform relationships",
          href: "/creator/supporters/demo1",
          status: "New",
          color: "bg-green-500"
        },
      ],
      color: "blue"
    },
    // Future demo groups will be added here
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      {/* Theme Toggle - Fixed position top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Reactr Platform Demos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive UI explorations for creators and supporters. Discover how Reactr enables custom content requests, live engagement, and cross-platform supporter experiences.
          </p>
        </motion.div>

        {/* Demo Groups */}
        <div className="space-y-16">
          {demoGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {group.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {group.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.demos.map((demo, demoIndex) => (
                  <motion.div
                    key={demo.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (demoIndex * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${demo.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                        {demo.title.charAt(0)}
                      </div>
                      {demo.status && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                          {demo.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {demo.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {demo.description}
                    </p>

                    <Link
                      href={demo.href}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      View Demo →
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16 text-gray-600 dark:text-gray-400"
        >
          <p className="text-lg">Explore Reactr&apos;s interface designs for creators and supporters! 🎨</p>
        </motion.footer>
      </div>
    </div>
  );
}
