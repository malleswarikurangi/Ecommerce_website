
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted online marketplace for quality products at great prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/products" className="block text-muted-foreground hover:text-primary">
                All Products
              </Link>
              <Link to="/categories" className="block text-muted-foreground hover:text-primary">
                Categories
              </Link>
              <Link to="/deals" className="block text-muted-foreground hover:text-primary">
                Special Deals
              </Link>
              <Link to="/new-arrivals" className="block text-muted-foreground hover:text-primary">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <div className="space-y-2">
              <Link to="/help" className="block text-muted-foreground hover:text-primary">
                Help Center
              </Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-primary">
                Returns
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-primary">
                Shipping Info
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>1-800-SHOP-HUB</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Commerce St, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
