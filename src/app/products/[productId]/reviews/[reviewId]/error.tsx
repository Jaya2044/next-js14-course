"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2 style={{ color: "tomato" }}>{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
