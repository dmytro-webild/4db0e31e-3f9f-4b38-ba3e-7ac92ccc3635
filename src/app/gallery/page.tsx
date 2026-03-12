"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function GalleryPage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Pool Cage & Screen Repair Gallery"
          description="Explore our latest projects showcasing professional pool cage repairs, rescreening work, and screen installations across Sarasota, Lakewood Ranch, and Bradenton."
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773089720919-hem8b6pv.png?_wi=1",              imageAlt: "pool cage complete rescreening project"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773166333865-qv7biwyu.jpg?_wi=1",              imageAlt: "lanai screen damage repair and restoration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773089720919-8mmoxn7n.png?_wi=1",              imageAlt: "hurricane screen installation florida"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773166248874-ivpdjy3u.jpg?_wi=1",              imageAlt: "patio screen door repair and frame restoration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773165043133-cjcts7wr.jpg?_wi=1",              imageAlt: "pool cage rescreening project completed"
            }
          ]}
          buttons={[
            { text: "Get a Free Estimate", href: "/contact" },
            { text: "Call Now: (941) 809-9115", href: "tel:(941)809-9115" },
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Pool Cage Repair", href: "#services" },
                { label: "Rescreening", href: "#services" },
                { label: "Lanai Screen", href: "#services" },
                { label: "Hurricane Screens", href: "#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
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
