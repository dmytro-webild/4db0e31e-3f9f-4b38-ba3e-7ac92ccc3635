"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
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

      <div id="testimonials" data-section="testimonials">
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
              <p className="text-base md:text-lg text-foreground/75">
                Hear from homeowners who trusted American Screen Hero with their pool cage and screen repair needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 rounded-lg border border-accent/20 bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "American Screen Hero did an amazing job rescreening our pool cage. The work was professional, timely, and they were respectful of our home. Highly recommend!"
                </p>
                <div className="font-semibold text-foreground">Margaret Johnson</div>
                <p className="text-sm text-foreground/60">Sarasota, FL</p>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 rounded-lg border border-accent/20 bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "After a hurricane damaged our lanai screen, we called American Screen Hero. They assessed the damage quickly and restored everything perfectly. Outstanding service!"
                </p>
                <div className="font-semibold text-foreground">Robert Chen</div>
                <p className="text-sm text-foreground/60">Lakewood Ranch, FL</p>
              </div>

              {/* Testimonial 3 */}
              <div className="p-8 rounded-lg border border-accent/20 bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "We needed our pool cage rescreened and also wanted to add hurricane-resistant screens. The team at American Screen Hero made the entire process smooth and hassle-free."
                </p>
                <div className="font-semibold text-foreground">Patricia Williams</div>
                <p className="text-sm text-foreground/60">Bradenton, FL</p>
              </div>

              {/* Testimonial 4 */}
              <div className="p-8 rounded-lg border border-accent/20 bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "Excellent workmanship on our patio screen door repair. The hinges were completely replaced and the frame was straightened. Worth every penny!"
                </p>
                <div className="font-semibold text-foreground">David Martinez</div>
                <p className="text-sm text-foreground/60">Sarasota, FL</p>
              </div>

              {/* Testimonial 5 */}
              <div className="p-8 rounded-lg border border-accent/20 bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "We got a free estimate from American Screen Hero and decided to move forward with their recommendation. The quality and professionalism exceeded our expectations."
                </p>
                <div className="font-semibold text-foreground">Sarah Anderson</div>
                <p className="text-sm text-foreground/60">Lakewood Ranch, FL</p>
              </div>

              {/* Testimonial 6 */}
              <div className="p-8 rounded-lg border border-accent/20 bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "American Screen Hero helped us with a complete pool cage restoration. The new screening material looks fantastic and should last for years. Great investment!"
                </p>
                <div className="font-semibold text-foreground">Michael Thompson</div>
                <p className="text-sm text-foreground/60">Bradenton, FL</p>
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
