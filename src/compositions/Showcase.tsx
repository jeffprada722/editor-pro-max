import {AbsoluteFill, Sequence} from "remotion";
import {AnimatedTitle} from "../components/text/AnimatedTitle";
import {LowerThird} from "../components/text/LowerThird";
import {GradientBackground} from "../components/backgrounds/GradientBackground";
import {GRADIENTS} from "../presets/colors";
import {loadDefaultFonts} from "../presets/fonts";

export const ShowcaseComposition: React.FC = () => {
  loadDefaultFonts();

  return (
    <AbsoluteFill>
      {/* Background */}
      <GradientBackground
        colors={GRADIENTS.midnight}
        angle={135}
        animateAngle
        animateSpeed={0.5}
      />

      {/* Main title */}
      <Sequence from={0} durationInFrames={150}>
        <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
          <AnimatedTitle
            text="Editor Pro Max"
            fontSize={96}
            fontWeight={800}
            color="#ffffff"
            enterAnimation="scale"
            exitAnimation="blur"
            enterDuration={25}
            holdDuration={80}
            exitDuration={20}
            textShadow="0 4px 30px rgba(99, 102, 241, 0.5)"
          />
        </AbsoluteFill>
      </Sequence>

      {/* Subtitle */}
      <Sequence from={30} durationInFrames={120}>
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <AnimatedTitle
            text="AI-Powered Video Editing"
            fontSize={36}
            fontWeight={400}
            color="#c4b5fd"
            enterAnimation="slideUp"
            exitAnimation="fade"
            enterDuration={20}
            holdDuration={60}
            exitDuration={15}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Second scene title */}
      <Sequence from={160} durationInFrames={130}>
        <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
          <AnimatedTitle
            text="Built with Remotion"
            fontSize={72}
            fontWeight={700}
            color="#ffffff"
            enterAnimation="typewriter"
            exitAnimation="slideLeft"
            enterDuration={40}
            holdDuration={50}
            exitDuration={15}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Lower third */}
      <Sequence from={170} durationInFrames={110}>
        <LowerThird
          name="Claude Code"
          title="Your AI Video Editor"
          accentColor="#8b5cf6"
          enterDuration={20}
          holdDuration={60}
          exitDuration={15}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
