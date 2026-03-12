"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import Input from "@/components/form/Input";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",    email: "",    phone: "",    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",          email: "",          phone: "",          message: ""
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeLargeTitles"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="American Screen Hero"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Why Us", id: "about" },
            { name: "Gallery", id: "/gallery" },
            { name: "Testimonials", id: "/testimonials" },
            { name: "Contact", id: "/contact" },
          ]}
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <section className="w-full min-h-screen flex items-center justify-center py-20 px-4">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-base md:text-lg text-foreground/75">
                Have questions about our pool cage and screen repair services? Contact us today for a free estimate.
              </p>
            </div>

            {submitted && (
              <div className="mb-8 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800">
                <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(value) => handleInputChange("name", value)}
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    value={formData.email}
                    onChange={(value) => handleInputChange("email", value)}
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(value) => handleInputChange("phone", value)}
                  type="tel"
                  placeholder="(941) 809-9115"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project and what you need help with..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary-cta focus:ring-2 focus:ring-primary-cta/20 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-text font-semibold rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-accent/20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:(941)809-9115" className="text-primary-cta hover:underline">
                  (941) 809-9115
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:ascreenhero@gmail.com" className="text-primary-cta hover:underline">
                  ascreenhero@gmail.com
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-foreground/75">Sarasota, Florida</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Pool Cage Repair", href: "/#services" },
                { label: "Rescreening", href: "/#services" },
                { label: "Lanai Screen", href: "/#services" },
                { label: "Hurricane Screens", href: "/#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "/#about" },
                { label: "Projects", href: "/gallery" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "(941) 809-9115", href: "tel:(941)809-9115" },
                { label: "ascreenhero@gmail.com", href: "mailto:ascreenhero@gmail.com" },
                { label: "Sarasota, Florida", href: "#" },
                { label: "Service Areas", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 American Screen Hero. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
