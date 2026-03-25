# Editor Pro Max — AI Video Editor

You are a professional video editor. This project uses **Remotion** (React-based video framework) so you create and edit videos by writing React components. Users describe videos in natural language; you write the code.

## Setup (first time only)

```bash
npm install          # Install all dependencies
```

Requires **Node.js 20+** (LTS recommended).

## Quick Start

```bash
npm run dev          # Launch Remotion Studio (preview in browser)
npx remotion render <CompositionId> out/video.mp4   # Render to file
npm run typecheck    # Verify TypeScript compiles cleanly
```

- **Preview:** `npm run dev` opens Studio at http://localhost:3000
- **Render:** `npx remotion render Showcase out/showcase.mp4`
- **Batch render:** `./scripts/batch-render.sh Showcase youtube tiktok square`

## Architecture

```
src/
├── compositions/     ← YOUR VIDEO PROJECTS GO HERE (create/edit these)
├── components/       ← Reusable building blocks
│   ├── text/         AnimatedTitle, LowerThird, TypewriterText, WordByWordCaption
│   ├── backgrounds/  GradientBackground, ParticleField, GridPattern, ColorWash
│   ├── overlays/     ProgressBar, Watermark, CallToAction, CountdownTimer
│   ├── media/        FitVideo, FitImage, Slideshow
│   ├── layout/       SplitScreen, PictureInPicture, SafeArea
│   └── transitions/  TransitionPresets (crossfade, slide, wipe, etc.)
├── templates/        ← Ready-made video templates
│   ├── social/       TikTokVideo, InstagramReel, YouTubeShort
│   ├── content/      Presentation, Testimonial
│   └── promo/        Announcement, BeforeAfter
├── presets/          ← Colors, dimensions, easings, fonts
├── hooks/            ← useAnimation, useCaptions, useColorScheme
├── schemas/          ← Zod schemas for all props
├── utils/            ← Animation math helpers
└── Root.tsx          ← REGISTER ALL COMPOSITIONS HERE
```

### How to create a new video

1. Create a new file in `src/compositions/MyVideo.tsx`
2. Import components from `src/components/` and templates from `src/templates/`
3. Register it in `src/Root.tsx` with a `<Composition>` element
4. Preview with `npm run dev`, render with `npx remotion render MyVideo out/my-video.mp4`

## Component Reference

### Text

**AnimatedTitle** (`src/components/text/AnimatedTitle.tsx`)
Animated text with configurable enter/exit animations.
```tsx
<AnimatedTitle
  text="Hello World"
  fontSize={72}
  fontWeight={800}
  color="#ffffff"
  enterAnimation="slideUp"    // fade | slideUp | slideDown | slideLeft | slideRight | scale | typewriter | blur
  exitAnimation="fade"
  enterDuration={20}          // frames
  holdDuration={60}
  exitDuration={15}
  textShadow="0 4px 20px rgba(0,0,0,0.5)"
  letterSpacing={-1}
  lineHeight={1.1}
/>
```

**LowerThird** (`src/components/text/LowerThird.tsx`)
News-style lower third with name and title.
```tsx
<LowerThird
  name="John Doe"
  title="CEO at Company"
  accentColor="#6366f1"
  position="bottomLeft"       // bottomLeft | bottomRight | bottomCenter
  enterDuration={20}
  holdDuration={90}
  exitDuration={15}
/>
```

**TypewriterText** (`src/components/text/TypewriterText.tsx`)
Character-by-character text reveal.
```tsx
<TypewriterText
  text="Hello, World!"
  fontSize={48}
  fontFamily="'JetBrains Mono', monospace"
  cursorColor="#6366f1"
  typingSpeed={2}             // frames per character
  startDelay={10}             // delay before typing starts
/>
```

**WordByWordCaption** (`src/components/text/WordByWordCaption.tsx`)
Karaoke-style word highlighting (for subtitles/captions).
```tsx
<WordByWordCaption
  words={[
    {text: "Hello", startFrame: 0, endFrame: 15},
    {text: "World", startFrame: 16, endFrame: 30},
  ]}
  fontSize={48}
  color="rgba(255,255,255,0.6)"
  highlightColor="#ffffff"
  position="bottom"           // top | center | bottom
/>
```

**TextStyles** (`src/components/text/TextStyles.ts`)
Pre-defined style presets: `heading`, `subheading`, `body`, `caption`, `quote`, `code`, `display`.

### Backgrounds

**GradientBackground** (`src/components/backgrounds/GradientBackground.tsx`)
```tsx
<GradientBackground
  colors={["#0f0f23", "#1a1a3e"]}   // or use GRADIENTS.sunset, GRADIENTS.ocean, etc.
  angle={135}
  animateAngle={true}                // slowly rotate gradient
  animateSpeed={0.5}
  type="linear"                      // linear | radial
/>
```

**ParticleField** (`src/components/backgrounds/ParticleField.tsx`)
Floating particles effect.
```tsx
<ParticleField count={50} color="rgba(255,255,255,0.3)" speed={0.5} direction="up" />
```

**GridPattern** (`src/components/backgrounds/GridPattern.tsx`)
Animated dot/line grid.
```tsx
<GridPattern type="dots" spacing={40} size={2} color="rgba(255,255,255,0.15)" animate animateSpeed={0.5} />
```

**ColorWash** (`src/components/backgrounds/ColorWash.tsx`)
Solid color background. `<ColorWash color="#0a0a0a" />`

### Overlays

**ProgressBar** — Video progress indicator. `<ProgressBar color="#6366f1" height={4} position="bottom" />`

**Watermark** — Corner logo/text. `<Watermark text="@brand" corner="bottomRight" opacity={0.5} />`

**CallToAction** — Animated CTA popup.
```tsx
<CallToAction text="Subscribe" subtext="Turn on notifications" enterDelay={60} />
```

**CountdownTimer** — Countdown display.
```tsx
<CountdownTimer startFrom={150} fontSize={120} showLabel label="Starting in" />
```

### Media

**FitVideo** — Video with smart fitting. `<FitVideo src={staticFile("video.mp4")} fit="cover" volume={0.8} />`

**FitImage** — Image with Ken Burns effects.
```tsx
<FitImage src={staticFile("photo.jpg")} fit="cover" kenBurns="zoomIn" kenBurnsIntensity={0.1} />
```

**Slideshow** — Image slideshow with crossfade transitions.
```tsx
<Slideshow images={[staticFile("1.jpg"), staticFile("2.jpg"), staticFile("3.jpg")]} kenBurns transitionDuration={15} />
```

### Layout

**SplitScreen** — Multi-panel layout.
```tsx
<SplitScreen direction="horizontal" ratio={0.5} gap={4}>
  <div>Left panel</div>
  <div>Right panel</div>
</SplitScreen>
```

**PictureInPicture** — PiP overlay.
```tsx
<PictureInPicture
  main={<FitVideo src="main.mp4" />}
  pip={<FitVideo src="webcam.mp4" />}
  corner="bottomRight"
  pipWidth={360}
  pipHeight={240}
/>
```

**SafeArea** — Platform-safe padding. `<SafeArea paddingHorizontal={60} paddingVertical={60}>...</SafeArea>`

### Transitions

Available transition presets in `src/components/transitions/TransitionPresets.ts`:
`crossfade`, `fadeQuick`, `fadeSlow`, `slideLeft`, `slideRight`, `slideUp`, `slideDown`, `wipeLeft`, `wipeRight`, `clockwise`, `cut`

Usage with `<TransitionSeries>`:
```tsx
import {TransitionSeries} from "@remotion/transitions";
import {TRANSITION_PRESETS} from "../components/transitions/TransitionPresets";

<TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={90}>
    <Scene1 />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition {...TRANSITION_PRESETS.crossfade} />
  <TransitionSeries.Sequence durationInFrames={90}>
    <Scene2 />
  </TransitionSeries.Sequence>
</TransitionSeries>
```

## Templates Reference

### TikTokVideo (1080x1920)
```tsx
<TikTokVideo hook="Did you know?" body="AI can edit videos." cta="Follow for more" />
```

### InstagramReel (1080x1920)
```tsx
<InstagramReel headline="Your headline" subtext="Details here" brandName="Brand" />
```

### YouTubeShort (1080x1920)
```tsx
<YouTubeShort title="Title" subtitle="Subtitle" />
```

### Presentation (1920x1080)
```tsx
<Presentation slides={[{title: "Intro", body: "Welcome"}, {title: "Topic", body: "Details"}]} framesPerSlide={150} />
```

### Testimonial (1920x1080)
```tsx
<Testimonial quote="Amazing product!" author="Jane Doe" role="CEO" />
```

### Announcement (1920x1080)
```tsx
<Announcement preTitle="Introducing" title="Product Name" subtitle="Tagline" cta="Learn More" />
```

### BeforeAfter (1920x1080)
```tsx
<BeforeAfter beforeLabel="Before" afterLabel="After">
  <FitImage src="before.jpg" />
  <FitImage src="after.jpg" />
</BeforeAfter>
```

## Platform Specs

| Platform | Dimensions | FPS | Duration |
|---|---|---|---|
| TikTok | 1080x1920 | 30 | 15-60s |
| Instagram Reel | 1080x1920 | 30 | 15-90s |
| Instagram Story | 1080x1920 | 30 | up to 15s |
| Instagram Post | 1080x1080 | 30 | up to 60s |
| YouTube | 1920x1080 | 30 | any |
| YouTube Short | 1080x1920 | 60 | up to 60s |
| Twitter/X | 1080x1080 | 30 | up to 140s |
| LinkedIn | 1920x1080 | 30 | up to 10min |

Use `secondsToFrames(seconds, fps)` from `src/presets/dimensions.ts` for frame calculations.

## Presets

### Colors (`src/presets/colors.ts`)
Palettes: `dark`, `light`, `vibrant`, `warm`, `cool`, `neon`
Gradients: `sunset`, `ocean`, `forest`, `purple`, `fire`, `midnight`, `aurora`, `rainbow`

### Fonts (`src/presets/fonts.ts`)
Families: `heading` (Inter), `body` (Inter), `mono` (JetBrains Mono), `display` (Poppins), `elegant` (Playfair Display)
Always call `loadDefaultFonts()` or `loadGoogleFont("FontName")` in your composition.

### Easings (`src/presets/easings.ts`)
`linear`, `easeIn`, `easeInOut`, `easeOut`, `bounceIn`, `bounceOut`, `elastic`, `backIn`, `backOut`, `sharp`, `smooth`, `snappy`

## Animation Guide

### Golden Rules
1. **Always use `useCurrentFrame()`** for animations — never CSS transitions (causes flickering)
2. **Always clamp interpolations** with `extrapolateRight: "clamp"`
3. Use `spring()` for natural motion, `interpolate()` for precise control

### Common Patterns

**Fade in:**
```tsx
const frame = useCurrentFrame();
const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: "clamp"});
```

**Slide up with spring:**
```tsx
const {fps} = useVideoConfig();
const progress = spring({fps, frame, config: {damping: 14, stiffness: 120}});
const translateY = interpolate(progress, [0, 1], [50, 0]);
```

**Enter-hold-exit:**
```tsx
import {enterHoldExit} from "../utils/math";
const opacity = enterHoldExit(frame, 20, 60, 15); // enter 20f, hold 60f, exit 15f
```

**Timing with Sequences:**
```tsx
<Sequence from={0} durationInFrames={90}>    {/* Scene 1: frames 0-89 */}
<Sequence from={90} durationInFrames={90}>   {/* Scene 2: frames 90-179 */}
<Sequence from={180}>                         {/* Scene 3: frame 180 onwards */}
```

## Rendering Reference

```bash
# Basic render
npx remotion render Showcase out/showcase.mp4

# Specific codec
npx remotion render Showcase out/video.webm --codec=vp8

# Custom dimensions (override composition)
npx remotion render TikTok out/tiktok.mp4 --width=1080 --height=1920

# Render specific frames
npx remotion render Showcase out/clip.mp4 --frames=0-90

# ProRes (high quality)
npx remotion render Showcase out/video.mov --codec=prores --prores-profile=4444

# GIF output
npx remotion render Showcase out/animation.gif --codec=gif

# Still image
npx remotion still Showcase out/thumbnail.png --frame=45

# Batch render for multiple platforms
./scripts/batch-render.sh Showcase youtube tiktok square
```

## Hooks

**useAnimation** — Simplified enter/hold/exit animation state.
```tsx
const {opacity, isEntering, isHolding, isExiting, isVisible} = useAnimation({
  enterDuration: 20, holdDuration: 60, exitDuration: 15, type: "spring"
});
```

**useCaptions** — Convert Whisper output to frame-based captions.
```tsx
import {captionsToWords} from "../hooks/useCaptions";
const words = captionsToWords([{text: "Hello", startMs: 0, endMs: 500}], 30);
```

**useColorScheme** — Get a color palette.
```tsx
const colors = useColorScheme("dark"); // colors.bg, colors.text, colors.accent
```

## Workflow Tips

- Put user media files (videos, images, audio) in `public/assets/` and reference with `staticFile("assets/filename.ext")`
- Register every composition in `src/Root.tsx` or it won't appear in Studio
- Use `<AbsoluteFill>` for layering (last child renders on top)
- Use `<Sequence from={X} durationInFrames={Y}>` for timing
- Use `<Series>` when scenes play sequentially without overlaps
- For frame math: `secondsToFrames(5, 30)` = 150 frames
