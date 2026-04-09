import React from "react";
import { ParallaxHero } from "../components/sections/ParallaxHero";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { ClientMarquee } from "../components/sections/ClientMarquee";
import { TestimonialPreview } from "../components/sections/TestimonialPreview";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { StickyCTA } from "../components/shared/StickyCTA";
import { AnimatedSection, AnimatedText } from "../components/shared/AnimatedSection";
import { ScrambleText } from "../components/shared/ScrambleText";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import designerPortrait from "figma:asset/459dc648b1cd15ce7d834e6ca0f4ebb46995942f.png";

export function HomePage() {
  return (
    <div className="bg-white">
      <ParallaxHero />
      <ClientMarquee />
      <FeaturedWork />
      <TestimonialPreview />

      {/* About Preview Section */}
      <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
          style={{ position: 'relative' }}
        >
          <AnimatedSection animation="scale" duration={1.2}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={designerPortrait}
                  alt="Designer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-tr-3xl rounded-bl-3xl z-10 hidden md:block">
                <p className="text-5xl font-bold tracking-tighter">
                  Designing
                </p>
                <p className="text-sm font-medium uppercase tracking-wide opacity-60">
                   for Impact
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade" delay={0.3}>
            <div className="space-y-8">
              <AnimatedText
                as="h2"
                splitBy="words"
                stagger={0.05}
                className="text-4xl md:text-6xl font-bold tracking-tighter text-black"
              >
                More than just visuals.
              </AnimatedText>
              <p className="text-xl text-black/60 leading-relaxed">
                I combine product thinking, UX strategy, and
                refined UI craft to design digital experiences
                that are functional, scalable, and visually clear.
                My work is guided by user needs, informed by
                research, and enhanced through motion and
                interaction.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <h4 className="text-2xl font-bold text-black mb-2">
                    98+
                  </h4>
                  <p className="text-black/40">
                    Projects Delivered
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black mb-2">
                    12+
                  </h4>
                  <p className="text-black/40">Product Developed</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 h-12 border-black/10 btn-water btn-water-black"
              >
                <Link to="/about">
                  <ScrambleText>Read My Story</ScrambleText>{" "}
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ServicesPreview />

      <StickyCTA to="/contact" />
    </div>
  );
}