"use client";
import StepWrapper from "@/components/StepWrapper";

export default function WelcomePage() {
  return (
    <StepWrapper
      title="Welcome to Your UI Builder"
      description="This is your playground step. Here we’ll experiment with layout, movement, styling, resizing, and customization controls."
      nextEnabled={true}
    >
      <div className="w-full h-[500px] border rounded-lg bg-white shadow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">🎨 UI Playground</h2>
          <p className="text-gray-600 max-w-[500px]">
            This step is completely safe to break, modify, rearrange, redesign, and rebuild.
            We’ll use it to develop our customization engine.
          </p>
        </div>
      </div>
    </StepWrapper>
  );
}
