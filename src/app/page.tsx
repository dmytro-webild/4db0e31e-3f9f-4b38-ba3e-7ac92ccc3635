"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import ContactText from "@/components/sections/contact/ContactText";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function LandingPage() {
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
            { name: "Gallery", id: "gallery" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Pool Cage & Screen Repair Experts in Sarasota"
          description="Professional pool cage repair and rescreening services for homeowners in Sarasota, Lakewood Ranch, and Bradenton. We deliver quality screen materials and reliable service backed by free estimates."
          background={{ variant: "plain" }}
          tag="Local Experts"
          tagAnimation="slide-up"
          buttons={[
            { text: "Get a Free Estimate", href: "contact" },
            { text: "Call Now: (941) 809-9115", href: "tel:(941)809-9115" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-woman-traveling-without-covid_23-2149077831.jpg"
          imageAlt="residential pool cage repair Florida"
          mediaAnimation="blur-reveal"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSixteen
          title="Our Screen Repair Services"
          description="We specialize in comprehensive pool cage and screen repair solutions for Southwest Florida homes."
          tag="Services"
          tagAnimation="slide-up"
          negativeCard={{
            items: [
              "Damaged or torn screens",              "Corroded aluminum frames",              "Broken door hinges",              "Water leaks and seal failures"
            ],
          }}
          positiveCard={{
            items: [
              "Expert screen repair & rescreening",              "Professional panel replacement",              "Hurricane-resistant installation",              "Quality materials & fast service"
            ],
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Why Choose American Screen Hero?"
          description="We are committed to delivering exceptional screen repair services with professional craftsmanship, premium materials, and customer satisfaction. Our team serves Sarasota, Lakewood Ranch, Bradenton, and surrounding areas with expertise in all types of pool cage, lanai, patio, and screen door repairs."
          tag="Our Promise"
          tagAnimation="slide-up"
          metrics={[
            { value: "15+", title: "Years of Experience" },
            { value: "100%", title: "Free Estimates" },
          ]}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-travel-beauty-chair-hotel_1203-5140.jpg"
          imageAlt="pool cage rescreening project"
          useInvertedBackground={false}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <MetricCardEleven
          title="Project Gallery"
          description="See examples of our professional pool cage repairs, rescreening projects, and screen installations."
          tag="Recent Work"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "Pool Cage",              title: "Complete Rescreening",              description: "Full panel replacement with new screening material",              imageSrc: "http://img.b2bpic.net/free-photo/pool-tennis-court_23-2147664474.jpg",              imageAlt: "completed pool cage project"
            },
            {
              id: "2",              value: "Lanai Screen",              title: "Damage Repair",              description: "Professional restoration and reinforcement",              imageSrc: "http://img.b2bpic.net/free-photo/pool-umbrellas-hammocks-seen-from_1203-296.jpg",              imageAlt: "renovated lanai screening area"
            },
            {
              id: "3",              value: "Storm Prep",              title: "Hurricane Screening",              description: "Installation of protective screen systems",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-seashore-with-breathtaking-skies_181624-373.jpg",              imageAlt: "hurricane screen installation Florida"
            },
            {
              id: "4",              value: "Patio Screen",              title: "Door Repair",              description: "Hinge replacement and frame restoration",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-using-laptop-outdoors_23-2150747666.jpg",              imageAlt: "lanai screen replacement project"
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Margaret Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-office-travel-agency_23-2150433340.jpg",              imageAlt: "professional headshot portrait"
            },
            {
              id: "2",              name: "Robert Chen",              imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-woman-black-jacket_176474-101915.jpg",              imageAlt: "professional headshot portrait"
            },
            {
              id: "3",              name: "Patricia Williams",              imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-speaking-phone-smiling-office_176420-944.jpg",              imageAlt: "professional headshot portrait"
            },
            {
              id: "4",              name: "David Martinez",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-mature-businessman-with-clasped-hands_23-2147955358.jpg",              imageAlt: "professional headshot portrait"
            },
          ]}
          cardTitle="Trusted by hundreds of homeowners in Sarasota, Lakewood Ranch, and Bradenton for reliable pool cage and screen repair"
          cardTag="Customer Reviews"
          cardAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to restore your pool cage or screen? Contact us today for a free estimate and professional service."
          animationType="reveal-blur"
          buttons={[
            { text: "Call (941) 809-9115", href: "tel:(941)809-9115" },
            { text: "Email: ascreenhero@gmail.com", href: "mailto:ascreenhero@gmail.com" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Pool Cage Repair", href: "services" },
                { label: "Rescreening", href: "services" },
                { label: "Lanai Screen", href: "services" },
                { label: "Hurricane Screens", href: "services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Projects", href: "gallery" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Contact", href: "contact" },
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
