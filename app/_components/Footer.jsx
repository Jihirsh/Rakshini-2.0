import { Heart, Shield, Users, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-primary-soft">
              Rakshini
            </h3>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              Empowering women worldwide with safety tools, health tracking, and
              community support. Because every woman deserves to live fearlessly
              and thrive confidently.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-soft" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-soft" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-soft" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Features</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#safety"
                  className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
                >
                  Safety Map
                </a>
              </li>
              <li>
                <a
                  href="#period"
                  className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
                >
                  Period Tracker
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#alerts"
                  className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
                >
                  Smart Alerts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-soft" />
                <span className="opacity-80">support@rakshini.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-soft" />
                <span className="opacity-80">24/7 Support Helpline</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-soft" />
                <span className="opacity-80">National Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-80 mb-4 md:mb-0">
              © 2025 Rakshini. Strengthening voices, celebrating women.
            </p>
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
              >
                Terms of Service
              </a>
              <a
                href="#support"
                className="opacity-80 hover:opacity-100 hover:text-primary-soft transition-all"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
