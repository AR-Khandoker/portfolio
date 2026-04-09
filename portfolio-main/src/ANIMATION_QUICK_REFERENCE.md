# 🎬 Animation Quick Reference

## Import Statement
```tsx
import { AnimatedSection, AnimatedText } from '../components/shared/AnimatedSection';
```

## Basic Usage

### Fade In
```tsx
<AnimatedSection animation="fade">
  <p>Fades in on scroll</p>
</AnimatedSection>
```

### Stagger Children
```tsx
<AnimatedSection animation="stagger" stagger={0.15}>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</AnimatedSection>
```

### Scale In
```tsx
<AnimatedSection animation="scale">
  <img src="..." alt="..." />
</AnimatedSection>
```

### Text Reveal (Word by Word)
```tsx
<AnimatedText 
  as="h1" 
  splitBy="words" 
  stagger={0.05}
  className="text-5xl font-bold"
>
  This Headline Reveals Word By Word
</AnimatedText>
```

### Text Reveal (Character by Character)
```tsx
<AnimatedText 
  as="h2" 
  splitBy="chars" 
  stagger={0.02}
>
  Character by character
</AnimatedText>
```

## Props

### AnimatedSection
- `animation`: `'fade'` | `'stagger'` | `'scale'` | `'none'`
- `delay`: number (seconds)
- `duration`: number (seconds)
- `stagger`: number (seconds, for stagger animation)
- `className`: string

### AnimatedText
- `as`: `'h1'` | `'h2'` | `'h3'` | `'h4'` | `'h5'` | `'h6'` | `'p'` | `'span'`
- `splitBy`: `'words'` | `'chars'`
- `stagger`: number (seconds)
- `className`: string

## Common Patterns

### Hero Section
```tsx
<AnimatedText as="h1" splitBy="words" stagger={0.05}>
  Your Amazing Headline
</AnimatedText>
```

### Service Cards
```tsx
<AnimatedSection animation="stagger" stagger={0.15}>
  {services.map(service => (
    <ServiceCard key={service.id} {...service} />
  ))}
</AnimatedSection>
```

### Image Gallery
```tsx
<AnimatedSection animation="scale" duration={1.2}>
  <img src="..." alt="..." />
</AnimatedSection>
```

### Content Section
```tsx
<AnimatedSection animation="fade" delay={0.3}>
  <p>Your content here...</p>
</AnimatedSection>
```

## Tips

- Use `0.8-1.2s` for durations
- Use `0.1-0.15s` for stagger delays
- Use `0.03-0.05s` for text stagger
- Don't animate everything - be selective
- Test on mobile devices

## Smooth Scroll

Automatically active site-wide. No configuration needed!

To temporarily disable (for testing):
```tsx
// In App.tsx, comment out:
// useLenis();
```

---

Full docs: `/ANIMATION_GUIDE.md`
