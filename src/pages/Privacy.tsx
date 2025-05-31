
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - lobbyist.fun</title>
        <meta name="description" content="Privacy Policy for lobbyist.fun" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Header */}
        <div className="bg-white border-b border-blue-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold text-blue-900">lobbyist.fun</span>
                </Link>
              </div>
              <Link to="/">
                <Button variant="outline" size="sm" className="government-button-outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="government-card">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-semibold text-blue-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when creating AI agents, including agent configurations, training data, and user preferences.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">2. How We Use Information</h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, including AI agent creation and political discourse facilitation.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Data Sources</h2>
              <p className="mb-4">
                When you connect data sources to train your agents, we process this data to improve agent responses. You retain ownership of your data.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">6. Cookies</h2>
              <p className="mb-4">
                We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">7. Changes to Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please visit our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Privacy;
