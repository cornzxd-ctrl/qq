import StepClient from "./StepClient";
import { STEPS, getNextStep, getPrevStep } from "../steps/steps";



export default async function StepPage({
  params,
}: {
  params: { step: string };
}) {
  const step = params.step;

  let StepComponent;
  try {
    StepComponent = (await import(`../steps/${step}/page`)).default;
  } catch {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">Step Not Found</h1>
        <a
          href="/builder/q1"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded"
        >
          Start Over
        </a>
      </div>
    );
  }

  const stepInfo = STEPS.find((s) => s.id === step);
  const next = getNextStep(step);
  const prev = getPrevStep(step);

  return (
    <StepClient
      step={step}
      StepComponent={StepComponent}
      stepLabel={stepInfo?.label ?? "Unknown"}
      next={next}
      prev={prev}
    />
  );
}
