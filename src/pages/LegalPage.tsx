import React from 'react';

export function LegalPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl text-black/60">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy & Terms</h1>
        <div className="space-y-6">
          <p>Last updated: December 2025</p>
          <section>
             <h2 className="text-xl font-bold text-black mb-4">1. Introduction</h2>
             <p>This website is a portfolio demonstration. No real personal data is collected or processed for commercial purposes beyond the demonstration of the contact form functionality.</p>
          </section>
          <section>
             <h2 className="text-xl font-bold text-black mb-4">2. Cookies</h2>
             <p>We use local storage to remember your preferences (e.g., theme settings) but do not use invasive tracking cookies.</p>
          </section>
          <section>
             <h2 className="text-xl font-bold text-black mb-4">3. Contact</h2>
             <p>If you have any questions, please reach out via the contact form.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
