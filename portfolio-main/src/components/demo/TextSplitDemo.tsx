import React, { useEffect } from 'react';
import {
  useSlideInChars,
  useDropWords,
  useFlipLines,
  useFadeInChars,
  useBlurInChars,
  useSlideWords,
  useScaleWords,
  useSlideUpLines,
  useCustomChars,
} from '../../hooks/useTextSplitAnimations';
import { animateAllTitles } from '../../utils/textSplitAnimations';

/**
 * Text Split Animation Examples
 * Shows all available text animation styles on scroll
 */
export function TextSplitDemo() {
  // Character animations
  const slideCharsRef = useSlideInChars();
  const fadeCharsRef = useFadeInChars();
  const blurCharsRef = useBlurInChars();
  
  // Word animations
  const dropWordsRef = useDropWords();
  const slideWordsRef = useSlideWords();
  const scaleWordsRef = useScaleWords();
  
  // Line animations
  const flipLinesRef = useFlipLines();
  const slideUpLinesRef = useSlideUpLines();
  
  // Custom animation
  const customRef = useCustomChars({
    x: 200,
    y: -50,
    rotation: 15,
    stagger: 0.03,
    duration: 0.8,
    ease: 'elastic.out(1, 0.3)',
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6">
        <div className="max-w-5xl text-center">
          <h1 
            ref={slideCharsRef}
            className="text-6xl md:text-8xl font-bold text-black mb-8"
          >
            Text Split Animations
          </h1>
          <p className="text-xl text-black/60">
            Every title animates beautifully on scroll
          </p>
        </div>
      </section>

      {/* Character Animations */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl space-y-24">
          <div className="relative text-center">
            <p className="text-sm uppercase tracking-wide text-purple-500 mb-4">
              Character Animations
            </p>
            <h2 
              ref={slideCharsRef}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Slide In Effect
            </h2>
            <p className="text-lg text-black/60">Letters slide from right with stagger</p>
          </div>

          <div className="relative text-center">
            <h2 
              ref={fadeCharsRef}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Fade In Effect
            </h2>
            <p className="text-lg text-black/60">Letters fade up from bottom</p>
          </div>

          <div className="relative text-center">
            <h2 
              ref={blurCharsRef}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Blur Reveal
            </h2>
            <p className="text-lg text-black/60">Letters sharpen as they appear</p>
          </div>

          <div className="relative text-center">
            <h2 
              ref={customRef}
              className="text-5xl md:text-7xl font-bold text-purple-500 mb-6"
            >
              Custom Animation
            </h2>
            <p className="text-lg text-black/60">Fully customizable movement</p>
          </div>
        </div>
      </section>

      {/* Word Animations */}
      <section className="relative py-32 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-4xl space-y-24">
          <div className="relative text-center">
            <p className="text-sm uppercase tracking-wide text-purple-500 mb-4">
              Word Animations
            </p>
            <h2 
              ref={dropWordsRef}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Drop with Rotation
            </h2>
            <p className="text-lg text-black/60">Words fall with random rotation</p>
          </div>

          <div className="relative text-center">
            <h2 
              ref={slideWordsRef}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Slide from Left
            </h2>
            <p className="text-lg text-black/60">Words glide in sequentially</p>
          </div>

          <div className="relative text-center">
            <h2 
              ref={scaleWordsRef}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Scale from Zero
            </h2>
            <p className="text-lg text-black/60">Words bounce into view</p>
          </div>
        </div>
      </section>

      {/* Line Animations */}
      <section className="relative py-32 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl space-y-24">
          <div className="relative text-center">
            <p className="text-sm uppercase tracking-wide text-purple-400 mb-4">
              Line Animations
            </p>
            <h2 
              ref={flipLinesRef}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              3D Flip Effect for Multi-Line Headings
            </h2>
            <p className="text-lg text-white/60">Lines flip in 3D space</p>
          </div>

          <div className="relative text-center">
            <h2 
              ref={slideUpLinesRef}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Slide Up Effect for Longer Text Content
            </h2>
            <p className="text-lg text-white/60">Lines rise from bottom</p>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Practical Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ExampleCard 
              title="About Section"
              animationType="chars"
            />
            <ExampleCard 
              title="Services Offered"
              animationType="words"
            />
            <ExampleCard 
              title="Project Showcase"
              animationType="chars"
            />
            <ExampleCard 
              title="Contact Information"
              animationType="words"
            />
          </div>
        </div>
      </section>

      {/* Auto Animation Demo */}
      <AutoAnimationDemo />
    </div>
  );
}

/**
 * Example card with text animation
 */
function ExampleCard({ title, animationType }: { 
  title: string; 
  animationType: 'chars' | 'words' 
}) {
  const charsRef = useSlideInChars();
  const wordsRef = useDropWords({ stagger: 0.1 });
  
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-black/5">
      <h3 
        ref={animationType === 'chars' ? charsRef : wordsRef}
        className="text-3xl font-bold text-black mb-4"
      >
        {title}
      </h3>
      <p className="text-black/60">
        This title animates {animationType === 'chars' ? 'character by character' : 'word by word'} 
        when scrolled into view.
      </p>
    </div>
  );
}

/**
 * Auto-detect all titles and animate them
 */
function AutoAnimationDemo() {
  useEffect(() => {
    // Automatically animate all h1, h2, h3 on the page
    // You can call this once in your App.tsx to animate all titles site-wide
    animateAllTitles({
      selector: '.auto-animate',
      animation: 'chars',
      style: 'slide',
    });
  }, []);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-purple-500 to-black text-white">
      <div className="container mx-auto max-w-4xl text-center space-y-12">
        <h2 className="auto-animate text-5xl md:text-7xl font-bold">
          Automatic Animation
        </h2>
        <p className="text-xl text-white/80">
          Add a class to automatically animate titles
        </p>
        <div className="space-y-8">
          <h3 className="auto-animate text-4xl font-bold">First Auto Title</h3>
          <h3 className="auto-animate text-4xl font-bold">Second Auto Title</h3>
          <h3 className="auto-animate text-4xl font-bold">Third Auto Title</h3>
        </div>
      </div>
    </section>
  );
}

export default TextSplitDemo;