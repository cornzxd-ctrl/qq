import Link from "next/link";

export default function StepClient({
  stepLabel,
  StepComponent,
  next,
  prev,
}: {
  stepLabel: string;
  StepComponent: any;
  next: string | null;
  prev: string | null;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Quote Builder</h1>
        <p className="text-sm text-gray-500">Step: {stepLabel}</p>
      </header>

      <main className="bg-white p-6 rounded shadow-sm">
        <StepComponent />
      </main>

      <footer className="mt-6 flex justify-between">
        {prev ? (
          <Link
            href={`/builder/${prev}`}
            className="px-4 py-2 border rounded"
          >
            ← Back
          </Link>
        ) : (
          <button disabled className="px-4 py-2 border rounded opacity-40">
            ← Back
          </button>
        )}

        {next ? (
          <Link
            href={`/builder/${next}`}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next →
          </Link>
        ) : (
          <button disabled className="px-4 py-2 bg-blue-600 text-white rounded opacity-40">
            Next →
          </button>
        )}
      </footer>
    </div>
  );
}
