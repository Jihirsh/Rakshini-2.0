"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Download, Shield, Map } from "lucide-react";
import Link from "next/link";
import Footer from "../_components/Footer";
import Image from "next/image";
import Navbar from "../_components/Navbar";

const AppDownload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* back button */}
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground hover:scale-105 transition-transform hover:text-primary-one hover:bg-primary-light"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* hero section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary-light text-primary-one border-primary-one text-sm px-4 py-2 cursor-pointer hover:scale-120 transition-transform hover:text-transparent bg-clip-text bg-linear-to-r from-primary-one to-primary-two">
              Mobile App Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight">
              Download Rakshini App
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the full power of women's safety and empowerment right
              in your pocket. Get instant access to emergency features,
              community support, and safety tools.
            </p>
          </div>

          {/* download cards */}
          <div className="grid md:grid-cols-2 gap-14 mb-16">
            <Card className="shadow-elegant border-border hover:shadow-bold transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/playstore.png"
                    width={50}
                    height={50}
                    alt="Play Store"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">
                  Download for Android
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get the full Rakshini experience on your Android device.
                  Compatible with Android 7.0 and above.
                </p>
                <Button className="w-full gradient-primary text-white shadow-soft hover:shadow-elegant cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Get it on Google Play
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Version 2.1.0 • 15MB • Free
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border hover:shadow-bold transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/appstore.png"
                    width={50}
                    height={50}
                    alt="Play Store"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">
                  Download for iOS
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experience Rakshini on your iPhone or iPad. Compatible with
                  iOS 13.0 and later.
                </p>
                <Button className="w-full gradient-primary text-white shadow-soft hover:shadow-elegant cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Download on App Store
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Version 2.1.0 • 18MB • Free
                </p>
              </CardContent>
            </Card>
          </div>

          {/* features highlight */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center shadow-elegant">
            <h2 className="text-3xl font-bold mb-10 text-foreground">
              Exclusive Mobile Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-one" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">SOS Mode</h3>
                <p className="text-sm text-muted-foreground">
                  One tap SOS feature with emergency alert
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Map className="w-8 h-8 text-primary-one" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  GPS Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Real-time location sharing with trusted contacts
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary-one" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Offline Mode
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access essential features without internet
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8">
              Join over 50,000 women who trust Rakshini for their daily safety
              and empowerment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white shadow-soft cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src="/playwhite.png"
                  width={20}
                  height={20}
                  alt="playstore-logo"
                />
                Download for Android
              </Button>
              <Button
                size="lg"
                className="gradient-primary text-white shadow-soft cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src="/appwhite.png"
                  width={20}
                  height={20}
                  alt="appstore-logo"
                />
                Download for iOS
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppDownload;
