import { useRef, useEffect, useCallback } from 'react';

// Characters used for scrambling — uppercase + digits feel premium & legible
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

interface ScrambleTextProps {
  /** The label text to scramble. Must be a plain string — no JSX children. */
  children: string;
  className?: string;
  /** Milliseconds between each frame update. Lower = faster scramble. */
  speed?: number;
  /** How many frames until the text fully resolves. */
  iterations?: number;
}

/**
 * ScrambleText
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders a <span> that scrambles its text content on hover of the nearest
 * interactive ancestor (button or a). Works passively — just wrap any CTA
 * label with this component and it auto-binds to the parent button/link.
 *
 * Usage:
 *   <Button asChild ...>
 *     <Link to="/contact">
 *       <ScrambleText>Book a Consultation</ScrambleText>
 *     </Link>
 *   </Button>
 */
export function ScrambleText({
  children,
  className = '',
  speed = 28,
  iterations = 18,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const originalText = children;

  // Stop scramble & restore original text
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (ref.current) ref.current.textContent = originalText;
  }, [originalText]);

  // Start scramble animation — resolves left-to-right
  const scramble = useCallback(() => {
    if (!ref.current) return;
    if (timerRef.current) clearInterval(timerRef.current);

    let frame = 0;

    timerRef.current = setInterval(() => {
      if (!ref.current) {
        clearInterval(timerRef.current!);
        return;
      }

      if (frame >= iterations) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
        ref.current.textContent = originalText;
        return;
      }

      const progress = frame / iterations;
      const resolvedCount = Math.floor(progress * originalText.length);
      let text = '';

      for (let i = 0; i < originalText.length; i++) {
        // Preserve spaces so layout doesn't jitter
        if (originalText[i] === ' ') {
          text += ' ';
        } else if (i < resolvedCount) {
          // Already resolved — show real character
          text += originalText[i];
        } else {
          // Still scrambling — show random char
          text += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      ref.current.textContent = text;
      frame++;
    }, speed);
  }, [originalText, speed, iterations]);

  // Attach listeners to the nearest button or anchor ancestor
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = el.closest('button, a') as HTMLElement | null;
    if (!trigger) return;

    trigger.addEventListener('mouseenter', scramble);
    trigger.addEventListener('mouseleave', clear);

    return () => {
      trigger.removeEventListener('mouseenter', scramble);
      trigger.removeEventListener('mouseleave', clear);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [scramble, clear]);

  return (
    <span ref={ref} className={className} aria-label={originalText}>
      {children}
    </span>
  );
}
