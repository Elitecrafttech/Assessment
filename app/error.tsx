
"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="text-center p-6">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-gray-500">{error.message}</p>
      <button onClick={() => reset()} className="mt-4 border px-[30px] py-2 rounded ">
        Retry
      </button>
    </div>
  );
}