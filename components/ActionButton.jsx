"use client";

import { useRouter } from "next/navigation";

export default function ActionButton({ action }) {
  const router = useRouter();
  return (
    <div className="w-full flex gap-4 mt-4">
      <button
        className={`w-full bg-indigo-600 hover:bg-indigo-800 ${
          action && "flex-1"
        }`}
      >
        Interested
      </button>

      <button
        onClick={() => {
          router.push("/payment");
        }}
        className="w-full"
      >
        Going
      </button>
    </div>
  );
}
