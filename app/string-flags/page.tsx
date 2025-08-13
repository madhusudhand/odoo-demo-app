import { DarkFeature } from "@darkfeature/sdk-react";
import Link from "next/link";

export default function StringFlags() {
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
            String Feature Flags
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dynamic text content that can be changed without code deployments.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Example 1: Theme Customization */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🎨 Theme Customization
            </h2>
            <p className="text-gray-600 mb-6">
              Change the visual theme and branding dynamically across your
              application.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "app-theme"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "app-theme"
                    <br />
                    fallback: "default"
                    <br />
                    variations: ["default", "dark", "corporate"]
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="app-theme"
                  fallback="default"
                  variations={{
                    default: (
                      <div className="bg-gray-100 border border-gray-300 p-6 rounded-lg text-center">
                        <h4 className="text-xl font-semibold mb-2">
                          Default Theme
                        </h4>
                        <p className="text-gray-700">
                          Clean and minimal design
                        </p>
                      </div>
                    ),
                    dark: (
                      <div className="bg-gray-900 text-white p-6 rounded-lg text-center">
                        <h4 className="text-xl font-semibold mb-2">
                          Dark Theme
                        </h4>
                        <p className="text-gray-300">
                          Elegant dark mode for night owls
                        </p>
                      </div>
                    ),
                    corporate: (
                      <div className="bg-gray-800 text-white p-6 rounded-lg text-center">
                        <h4 className="text-xl font-semibold mb-2">
                          Corporate Theme
                        </h4>
                        <p className="text-gray-300">
                          Professional theme for business
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Language Settings */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🌍 Language Settings
            </h2>
            <p className="text-gray-600 mb-6">
              Switch between different languages and regional content without
              code changes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "language"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "language"
                    <br />
                    fallback: "en"
                    <br />
                    variations: ["en", "es", "fr", "de"]
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="language"
                  fallback="en"
                  variations={{
                    en: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🇺🇸 English
                        </h4>
                        <p className="text-gray-700">
                          Welcome to our application!
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Click here to get started
                        </p>
                      </div>
                    ),
                    es: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🇪🇸 Español
                        </h4>
                        <p className="text-gray-700">
                          ¡Bienvenido a nuestra aplicación!
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Haga clic aquí para comenzar
                        </p>
                      </div>
                    ),
                    fr: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🇫🇷 Français
                        </h4>
                        <p className="text-gray-700">
                          Bienvenue dans notre application !
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Cliquez ici pour commencer
                        </p>
                      </div>
                    ),
                    de: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🇩🇪 Deutsch
                        </h4>
                        <p className="text-gray-700">
                          Willkommen in unserer Anwendung!
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Klicken Sie hier, um zu beginnen
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Personalized Messages */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              👤 Personalized Messages
            </h2>
            <p className="text-gray-600 mb-6">
              Show different messages based on user segments, seasons, or
              campaigns.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  Feature Flag: "welcome-message"
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-700">
                    feature: "welcome-message"
                    <br />
                    fallback: "default"
                    <br />
                    variations: ["default", "holiday", "new-user"]
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">Live Demo</h3>
                <DarkFeature
                  feature="welcome-message"
                  fallback="default"
                  variations={{
                    default: (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Welcome Back!
                        </h4>
                        <p className="text-gray-700">
                          We're glad to see you again. How can we help you
                          today?
                        </p>
                      </div>
                    ),
                    holiday: (
                      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🎄 Happy Holidays!
                        </h4>
                        <p className="text-gray-700">
                          Enjoy our special holiday features and exclusive
                          offers!
                        </p>
                      </div>
                    ),
                    "new-user": (
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🎉 Welcome New User!
                        </h4>
                        <p className="text-gray-700">
                          We're excited to have you on board. Let's get you
                          started!
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

// String feature flag usage
<DarkFeature
  feature="app-theme"
  fallback="default"
  variations={{
    default: <DefaultTheme />,
    dark: <DarkTheme />,
    corporate: <CorporateTheme />
  }}
/>

// With conditional rendering
<DarkFeature
  feature="language"
  fallback="en"
  variations={{
    en: <EnglishContent />,
    es: <SpanishContent />,
    fr: <FrenchContent />
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
