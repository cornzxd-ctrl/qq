export default function Builder() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">QQ Builder</h1>

      <p className="mt-2 text-gray-600">
        Let&apos;s build your system step-by-step.
      </p>

      <a
        href="/builder/q1"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl"
      >
        Start
      </a>
    </div>
  );
}
