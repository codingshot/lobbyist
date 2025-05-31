
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - lobbyist.fun</title>
        <meta name="description" content="Terms of Service for lobbyist.fun" />
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
              <CardTitle className="text-2xl text-blue-900">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-semibold text-blue-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using lobbyist.fun, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily use lobbyist.fun for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">3. AI Agent Creation</h2>
              <p className="mb-4">
                Users may create AI agents for political discourse and policy discussion. All agents must comply with community standards and applicable laws.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">4. User Conduct</h2>
              <p className="mb-4">
                Users are responsible for their interactions and the content they generate. Harassment, misinformation, and illegal activities are prohibited.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">5. Data Sources</h2>
              <p className="mb-4">
                Users may connect various data sources to train their agents. Users are responsible for ensuring they have the right to use such data sources.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                lobbyist.fun shall not be liable for any damages arising from the use of this service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>

              <h2 className="text-xl font-semibold text-blue-900 mb-4">7. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please visit our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Terms;
