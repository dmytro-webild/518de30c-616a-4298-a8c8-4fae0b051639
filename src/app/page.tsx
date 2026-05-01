"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Ockisk Donasi"
      button={{
        text: "Get Quote",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Elite Roofing & Waterproofing for Abuja's Architectural Gems"
      description="Ockisk Donasi delivers unparalleled precision in waterproofing, blending African contemporary elegance with global durability standards. Protect your investment with sophistication."
      kpis={[
        {
          value: "15+",          label: "Years Experience"},
        {
          value: "200+",          label: "Luxury Projects"},
        {
          value: "100%",          label: "Reliability"},
      ]}
      enableKpiAnimation={true}
      tag="PREMIUM CONSTRUCTION"
      buttons={[
        {
          text: "Contact +2348144399246",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-commercial-building-exterior-night-with-architectural-lighting_84443-74857.jpg"
      mediaAnimation="blur-reveal"
      tagIcon={Shield}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",          alt: "Client 1"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",          alt: "Client 2"},
        {
          src: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",          alt: "Client 3"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-grey-haired-female-ceo-smiling-content-experienced-beautiful-businesswoman-posing-office-room-business-company-appearance-expression-concept_74855-11905.jpg",          alt: "Client 4"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-posing-cv_23-2149927575.jpg",          alt: "Client 5"},
      ]}
      avatarText="Trusted by 500+ professionals"
      marqueeItems={[
        {
          type: "text",          text: "Precision Engineering"},
        {
          type: "text",          text: "10-Year Warranty"},
        {
          type: "text",          text: "Abuja Premiere"},
        {
          type: "text",          text: "Luxury Standard"},
        {
          type: "text",          text: "Unmatched Quality"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Legacy of Protection"
      description="At Ockisk Donasi, we understand that luxury architecture requires more than aesthetics—it requires uncompromising protection against the elements, specifically curated for the Nigerian climate."
      metrics={[
        {
          value: "10",          title: "Year Warranty"},
        {
          value: "24/7",          title: "Support"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/facade-modern-urban-building_122409-5.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Contemporary Waterproofing",          description: "Advanced chemical bonding for flat and sloped roofs.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/handyman-pouring-white-paint-home-renovation-couple-apartment-flat-repair-makeover_482257-3667.jpg",            imageAlt: "Roofing"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/sun-shining-architects-wearing-helmets_23-2147702489.jpg",            imageAlt: "Tools"}
        },
        {
          title: "Structural Integrity",          description: "Enhancing rooflines with durable, premium materials.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/construction-hammer-indoors-still-life_23-2150563119.jpg",            imageAlt: "Roof"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/luxury-living-room-with-city-skyline-view-generative-ai_188544-46252.jpg",            imageAlt: "Terrace"}
        },
        {
          title: "Terrace Solutions",          description: "Seamless waterproofing for modern luxury terraces.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/abstract-metallic-surface-wallpaper_23-2148846062.jpg",            imageAlt: "Terrace"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-wooden-roof_181624-2403.jpg",            imageAlt: "Process"}
        },
      ]}
      showStepNumbers={true}
      animationType="blur-reveal"
      title="Our Specialized Solutions"
      description="We blend innovative waterproofing technologies with meticulous craftsmanship to ensure the longevity of high-end builds."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Proven Performance"
      tag="OUR IMPACT"
      metrics={[
        {
          id: "1",          value: "500+",          description: "Successfully completed structures"},
        {
          id: "2",          value: "4.9/5",          description: "Customer satisfaction score"},
        {
          id: "3",          value: "24/7",          description: "Customer service availability"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Ockisk Donasi turned our architectural vision into a secure reality. The quality is unmatched."
      rating={5}
      author="Dr. Adebayo, Architect"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",          alt: "Dr. Adebayo"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",          alt: "Sarah T."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-grey-haired-female-ceo-smiling-content-experienced-beautiful-businesswoman-posing-office-room-business-company-appearance-expression-concept_74855-11905.jpg",          alt: "Linda K."},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-engineer-architect-looking-clipboard_23-2148233775.jpg",          alt: "James O."},
        {
          src: "http://img.b2bpic.net/free-photo/female-artist-studio_23-2148002201.jpg",          alt: "Elena R."},
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Do you offer warranties?",          content: "Yes, we provide up to 10-year warranties on all installations."},
        {
          id: "2",          title: "Which regions do you serve?",          content: "We primarily serve Abuja, but cater to high-end projects nationwide."},
        {
          id: "3",          title: "How do I get a quote?",          content: "Simply call us at +2349044157778 or contact us via our booking form."},
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about our luxury waterproofing services."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-12130.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="CONTACT US"
      title="Secure Your Project Today"
      description="Get in touch with our team of experts for a bespoke roofing and waterproofing consultation."
      imageSrc="http://img.b2bpic.net/free-photo/abstract-city-building-shadows_23-2149283297.jpg"
      inputPlaceholder="Enter your email"
      buttonText="Inquire Now"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Ockisk Donasi"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Work",              href: "#features"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "+2348144399246",              href: "tel:+2348144399246"},
            {
              label: "+2349044157778",              href: "tel:+2349044157778"},
          ],
        },
      ]}
      copyrightText="© 2024 Ockisk Donasi. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
