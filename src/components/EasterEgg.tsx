"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SECRETO = "encendido"; // cámbiala por la palabra que quieras recordar

export default function EasterEgg() {
  const router = useRouter();

  useEffect(() => {
    let buffer = "";
    let timer: ReturnType<typeof setTimeout>;

    function handleKey(e: KeyboardEvent) {
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-SECRETO.length);
      clearTimeout(timer);
      timer = setTimeout(() => { buffer = ""; }, 3000);
      if (buffer === SECRETO) {
        router.push("/accesos");
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      clearTimeout(timer);
    };
  }, [router]);

  return null;
}
