"use client";

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

export type SectionKey = "top" | "sobreMi" | "skills" | "proyectos" | "contacto";

type SectionNavigationContextValue = {
  setSectionNode: (section: SectionKey, node: HTMLElement | null) => void;
  scrollToSection: (section: SectionKey) => void;
};

const SectionNavigationContext =
  createContext<SectionNavigationContextValue | null>(null);

export function SectionNavigationProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const topRef = useRef<HTMLElement | null>(null);
  const sobreMiRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const proyectosRef = useRef<HTMLElement | null>(null);
  const contactoRef = useRef<HTMLElement | null>(null);
  const [pendingSection, setPendingSection] = useState<SectionKey | null>(null);

  const getSectionNode = useCallback((section: SectionKey) => {
    switch (section) {
      case "top":
        return topRef.current;
      case "sobreMi":
        return sobreMiRef.current;
      case "skills":
        return skillsRef.current;
      case "proyectos":
        return proyectosRef.current;
      case "contacto":
        return contactoRef.current;
    }
  }, []);

  const scrollToSection = useCallback(
    (section: SectionKey) => {
      const target = getSectionNode(section);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      setPendingSection(section);

      if (pathname !== "/") {
        router.push("/");
      }
    },
    [getSectionNode, pathname, router],
  );

  const setSectionNode = useCallback(
    (section: SectionKey, node: HTMLElement | null) => {
      switch (section) {
        case "top":
          topRef.current = node;
          break;
        case "sobreMi":
          sobreMiRef.current = node;
          break;
        case "skills":
          skillsRef.current = node;
          break;
        case "proyectos":
          proyectosRef.current = node;
          break;
        case "contacto":
          contactoRef.current = node;
          break;
      }
    },
    [],
  );

  useEffect(() => {
    if (!pendingSection) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const target = getSectionNode(pendingSection);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setPendingSection(null);
      }
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [getSectionNode, pendingSection, pathname]);

  const value = useMemo(
    () => ({
      setSectionNode,
      scrollToSection,
    }),
    [setSectionNode, scrollToSection],
  );

  return (
    <SectionNavigationContext.Provider value={value}>
      {children}
    </SectionNavigationContext.Provider>
  );
}

export function useSectionNavigation() {
  const context = useContext(SectionNavigationContext);

  if (!context) {
    throw new Error(
      "useSectionNavigation must be used within SectionNavigationProvider",
    );
  }

  return context;
}
