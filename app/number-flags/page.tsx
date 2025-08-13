import { DarkFeature } from "@darkfeature/sdk-react";
import Link from "next/link";

export default function NumberFlags() {
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
            Number Feature Flags
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numeric values for limits, thresholds, and configuration parameters.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Example 1: Rate Limiting */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🚦 Rate Limiting
            </h2>
            <p className="text-gray-600 mb-6">
              Dynamically adjust API rate limits based on server load or user
              tiers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "api-rate-limit"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "api-rate-limit"
                    <br />
                    fallback: 100
                    <br />
                    variations: [50, 100, 200, 500]
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="api-rate-limit"
                  fallback={100}
                  variations={{
                    50: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          High Load Mode
                        </h4>
                        <p className="text-gray-700">
                          Rate limit: <strong>50 requests/minute</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Server under heavy load
                        </p>
                      </div>
                    ),
                    100: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Normal Mode
                        </h4>
                        <p className="text-gray-700">
                          Rate limit: <strong>100 requests/minute</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Standard operation
                        </p>
                      </div>
                    ),
                    200: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Boosted Mode
                        </h4>
                        <p className="text-gray-700">
                          Rate limit: <strong>200 requests/minute</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Premium users only
                        </p>
                      </div>
                    ),
                    500: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Unlimited Mode
                        </h4>
                        <p className="text-gray-700">
                          Rate limit: <strong>500 requests/minute</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Enterprise tier
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Pagination Limits */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              📄 Pagination Limits
            </h2>
            <p className="text-gray-600 mb-6">
              Control how many items are displayed per page based on user
              preferences or device capabilities.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "items-per-page"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "items-per-page"
                    <br />
                    fallback: 20
                    <br />
                    variations: [10, 20, 50, 100]
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="items-per-page"
                  fallback={20}
                  variations={{
                    10: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Mobile View
                        </h4>
                        <p className="text-gray-700">
                          Showing <strong>10 items</strong> per page
                        </p>
                        <div className="mt-3 space-y-1">
                          {Array.from({ length: 10 }, (_, i) => (
                            <div
                              key={i}
                              className="h-2 bg-gray-200 rounded"
                            ></div>
                          ))}
                        </div>
                      </div>
                    ),
                    20: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Standard View
                        </h4>
                        <p className="text-gray-700">
                          Showing <strong>20 items</strong> per page
                        </p>
                        <div className="mt-3 space-y-1">
                          {Array.from({ length: 20 }, (_, i) => (
                            <div
                              key={i}
                              className="h-2 bg-gray-300 rounded"
                            ></div>
                          ))}
                        </div>
                      </div>
                    ),
                    50: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Desktop View
                        </h4>
                        <p className="text-gray-700">
                          Showing <strong>50 items</strong> per page
                        </p>
                        <div className="mt-3 space-y-1">
                          {Array.from({ length: 50 }, (_, i) => (
                            <div
                              key={i}
                              className="h-2 bg-gray-200 rounded"
                            ></div>
                          ))}
                        </div>
                      </div>
                    ),
                    100: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Tablet View
                        </h4>
                        <p className="text-gray-700">
                          Showing <strong>100 items</strong> per page
                        </p>
                        <div className="mt-3 space-y-1">
                          {Array.from({ length: 100 }, (_, i) => (
                            <div
                              key={i}
                              className="h-1 bg-gray-300 rounded"
                            ></div>
                          ))}
                        </div>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Cache TTL */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              ⏰ Cache TTL (Time To Live)
            </h2>
            <p className="text-gray-600 mb-6">
              Adjust cache expiration times based on data freshness requirements
              or system performance.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "cache-ttl"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "cache-ttl"
                    <br />
                    fallback: 300
                    <br />
                    variations: [60, 300, 900, 3600]
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="cache-ttl"
                  fallback={300}
                  variations={{
                    60: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Real-time Data
                        </h4>
                        <p className="text-gray-700">
                          Cache expires in <strong>1 minute</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          High-frequency updates required
                        </p>
                      </div>
                    ),
                    300: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Standard Cache
                        </h4>
                        <p className="text-gray-700">
                          Cache expires in <strong>5 minutes</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Balanced performance & freshness
                        </p>
                      </div>
                    ),
                    900: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Extended Cache
                        </h4>
                        <p className="text-gray-700">
                          Cache expires in <strong>15 minutes</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Better performance, less fresh
                        </p>
                      </div>
                    ),
                    3600: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Long-term Cache
                        </h4>
                        <p className="text-gray-700">
                          Cache expires in <strong>1 hour</strong>
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Maximum performance, static data
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

// Number feature flag usage
<DarkFeature
  feature="api-rate-limit"
  fallback={100}
  variations={{
    50: <HighLoadMode />,
    100: <NormalMode />,
    200: <BoostedMode />,
    500: <UnlimitedMode />
  }}
/>

// With conditional logic
<DarkFeature
  feature="items-per-page"
  fallback={20}
  variations={{
    10: <MobilePagination />,
    20: <StandardPagination />,
    50: <DesktopPagination />
  }}
/>

// For configuration values
const cacheTTL = useFeatureFlag("cache-ttl", 300);
setTimeout(() => {
  // Cache expires after cacheTTL seconds
}, cacheTTL * 1000);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
