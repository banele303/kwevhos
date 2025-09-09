"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EnvironmentalRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about-us#environmental");
  }, [router]);
  return null;
}