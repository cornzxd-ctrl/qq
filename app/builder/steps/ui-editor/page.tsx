"use client";
import StepWrapper from "@/components/StepWrapper";

export default function UIIntroPage() {
  return (
    <StepWrapper
      title="Now Let's Design Your Experience"
      description="Your application details are saved. Next, you’ll customize the look, layout, and branding of your customer experience."
      nextEnabled={true}
    >
      <div className="space-y-4">

        <p className="text-lg">
          This next phase lets you:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Adjust layout, spacing, and visual structure</li>
          <li>Change themes, colors, and typography</li>
          <li>Position components and preview changes live</li>
          <li>Save reusable templates for future use</li>
        </ul>

        <div className="p-4 rounded bg-blue-50 border border-blue-300">
          <strong>Tip:</strong> Think of this as your design studio.
          You control how your final customer-facing system looks and feels.
        </div>
      </div>
    </StepWrapper>
  );
}
