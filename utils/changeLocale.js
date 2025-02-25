"use client";

import { useRouter } from "next/navigation";

export function useChangeLocale() {
  const router = useRouter();

  const changeLocale = (newLocale) => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");

    // Sostituisci la lingua attuale con la nuova lingua
    pathParts[1] = newLocale;

    const newPath = pathParts.join("/");
    router.push(newPath);
  };

  return changeLocale;
}
