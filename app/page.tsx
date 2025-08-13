import { DarkFeature } from "@darkfeature/sdk-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Feature Flag Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore different types of feature flags with real-world examples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Boolean Flags */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Boolean Flags
            </h3>
            <p className="text-gray-600 mb-6">
              Simple on/off switches for features like dark mode, beta features,
              or A/B testing
            </p>
            <Link
              href="/boolean-flags"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Boolean Flags
            </Link>
          </div>

          {/* String Flags */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              String Flags
            </h3>
            <p className="text-gray-600 mb-6">
              Dynamic text content like themes, language settings, or
              personalized messages
            </p>
            <Link
              href="/string-flags"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Explore String Flags
            </Link>
          </div>

          {/* Number Flags */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 20l4-16m2 16l4-16M6 10h18M4 4h18"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Number Flags
            </h3>
            <p className="text-gray-600 mb-6">
              Numeric values for limits, thresholds, or configuration parameters
            </p>
            <Link
              href="/number-flags"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Number Flags
            </Link>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="mt-20 bg-white border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Live Demo: Dark Mode Toggle
          </h2>
          <div className="text-center">
            <DarkFeature
              feature="dark-mode"
              fallback={false}
              variations={{
                true: (
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      🌙 Dark Mode Active
                    </h3>
                    <p>
                      This content is shown when the dark-mode feature flag is
                      enabled
                    </p>
                  </div>
                ),
                false: (
                  <div className="bg-gray-100 text-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      ☀️ Light Mode Active
                    </h3>
                    <p>
                      This content is shown when the dark-mode feature flag is
                      disabled
                    </p>
                  </div>
                ),
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500">
          <p>Powered by @darkfeature/sdk-react</p>
        </div>
      </div>
    </div>
  );
}
