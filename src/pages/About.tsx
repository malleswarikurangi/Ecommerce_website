
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Truck, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ShopHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted online marketplace for quality products at great prices. 
            We've been serving customers worldwide since 2020 with dedication to excellence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, ShopHub began as a small startup with a big vision: 
              to make quality products accessible to everyone, everywhere. What started 
              as a passion project has grown into a trusted e-commerce platform serving 
              thousands of satisfied customers.
            </p>
            <p className="text-muted-foreground mb-4">
              We believe that shopping online should be simple, secure, and enjoyable. 
              That's why we've built our platform with user experience at the forefront, 
              ensuring every interaction is smooth and every purchase is protected.
            </p>
            <p className="text-muted-foreground">
              Today, we partner with top brands and emerging designers to bring you 
              the latest trends and timeless classics across all categories.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To democratize access to quality products while supporting businesses 
              of all sizes through our innovative e-commerce platform.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the world's most trusted and user-friendly online marketplace, 
              connecting buyers and sellers across the globe.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Every decision we make is guided by what's best for our customers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We carefully curate our products to ensure the highest standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                Fast shipping and dependable service you can count on.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Trust</h3>
              <p className="text-muted-foreground">
                Secure transactions and transparent policies build lasting relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Behind ShopHub is a passionate team of e-commerce experts, designers, 
            and customer service professionals dedicated to making your shopping 
            experience exceptional.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
