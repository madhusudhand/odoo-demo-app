import { DarkFeature } from "@darkfeature/sdk-react";
import Link from "next/link";

export default function BooleanFlags() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Boolean Feature Flags
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple on/off switches for features. Perfect for gradual rollouts
            and A/B testing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Example 1: Beta Features */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🚀 Beta Features
            </h2>
            <p className="text-gray-600 mb-6">
              Control access to new features before they're ready for all users.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "beta-features"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "beta-features"
                    <br />
                    fallback: false
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="beta-features"
                  fallback={false}
                  variations={{
                    true: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          ✨ Beta Features Enabled
                        </h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Advanced search filters</li>
                          <li>• Real-time notifications</li>
                          <li>• Custom dashboard layouts</li>
                        </ul>
                      </div>
                    ),
                    false: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🔒 Beta Features Disabled
                        </h4>
                        <p className="text-gray-600 text-sm">
                          You're using the stable version. Beta features are not
                          available.
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: A/B Testing */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🧪 A/B Testing
            </h2>
            <p className="text-gray-600 mb-6">
              Test different UI variations to optimize user experience and
              conversion rates.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "new-cta-design"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "new-cta-design"
                    <br />
                    fallback: false
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="new-cta-design"
                  fallback={false}
                  variations={{
                    true: (
                      <div className="text-center">
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                          🎯 Get Started Today!
                        </button>
                        <p className="text-sm text-gray-500 mt-2">
                          New design (Variant B)
                        </p>
                      </div>
                    ),
                    false: (
                      <div className="text-center">
                        <button className="bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
                          Get Started
                        </button>
                        <p className="text-sm text-gray-500 mt-2">
                          Original design (Variant A)
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Maintenance Mode */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🛠️ Maintenance Mode
            </h2>
            <p className="text-gray-600 mb-6">
              Quickly disable features during maintenance or when issues arise.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "maintenance-mode"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "maintenance-mode"
                    <br />
                    fallback: false
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="maintenance-mode"
                  fallback={false}
                  variations={{
                    true: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <svg
                            className="w-5 h-5 text-gray-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                          <h4 className="font-semibold text-gray-800">
                            Maintenance Mode Active
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Some features are temporarily unavailable. We're
                          working to restore full functionality.
                        </p>
                      </div>
                    ),
                    false: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <svg
                            className="w-5 h-5 text-gray-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <h4 className="font-semibold text-gray-800">
                            All Systems Operational
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          All features are available and working normally.
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              💻 Implementation Example
            </h2>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`import { DarkFeature } from "@darkfeature/sdk-react";

// Boolean feature flag usage
<DarkFeature
  feature="beta-features"
  fallback={false}
  variations={{
    true: <BetaFeatures />,
    false: <StandardFeatures />
  }}
/>

// Or with a single variation
<DarkFeature
  feature="new-feature"
  fallback={false}
  variations={{
    true: <NewFeature />
  }}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
