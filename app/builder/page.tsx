"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BuilderIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/builder/steps/q1");
  }, []);

  return null;
}
