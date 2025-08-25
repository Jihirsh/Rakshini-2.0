import { MapPin, Shield, AlertTriangle, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const SafetyMap = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Safety Map of
              <span className="text-gradient"> India</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover safe spaces, report incidents, and navigate with
              confidence using our community-powered safety insights across
              India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Safe Zones</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium">Caution Areas</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Community Reports</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Map Container */}
            <div className="relative">
              <Card className="p-8 shadow-elegant">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-primary" />
                    Interactive Safety Map
                  </h2>
                  <Button className="gradient-primary text-white cursor-pointer">
                    Report Incident
                  </Button>
                </div>

                {/* Map Display Area - This will be where the dynamic map goes */}
                <div className="relative bg-muted/30 rounded-2xl border-2 border-dashed border-border/50 min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-muted-foreground">
                      Dynamic Safety Map
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      This area will display India's interactive safety map with
                      real-time data, community reports, and safety indicators.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Info className="w-4 h-4" />
                      <span>Map integration coming soon</span>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
                  <Button variant="outline" size="sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Show Safe Zones
                  </Button>
                  <Button variant="outline" size="sm">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Show Incidents
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Community Reports
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Nearby Help
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Map Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the comprehensive safety features available on our
                interactive map
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Safe Zones",
                  description:
                    "Verified safe areas with good lighting, security, and community presence",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: AlertTriangle,
                  title: "Incident Reports",
                  description:
                    "Real-time incident reports and safety alerts from the community",
                  color: "bg-orange-100 text-orange-600",
                },
                {
                  icon: MapPin,
                  title: "Emergency Services",
                  description:
                    "Locate nearby police stations, hospitals, and emergency services",
                  color: "bg-red-100 text-red-600",
                },
                {
                  icon: Users,
                  title: "Community Data",
                  description:
                    "Crowdsourced safety information from verified community members",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: Shield,
                  title: "Safe Routes",
                  description:
                    "AI-powered route suggestions prioritizing well-lit, populated areas",
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  icon: Info,
                  title: "Real-time Updates",
                  description:
                    "Live updates on safety conditions and community alerts",
                  color: "bg-pink-100 text-pink-600",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Help Make India Safer</h3>
              <p className="text-xl text-muted-foreground mb-3 max-w-2xl mx-auto">
                Your reports and feedback help create a safer environment for
                all women. Join our community in building a comprehensive safety
                network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-8 cursor-pointer hover:scale-105 transition-transform"
                >
                  Report an Incident
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Download Mobile App
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyMap;
