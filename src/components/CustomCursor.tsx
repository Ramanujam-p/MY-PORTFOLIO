import { useEffect, useRef } from "react";

const isTouchDevice = () => {
  return (
    typeof window !== "undefined" &&
    (navigator.maxTouchPoints > 0 ||
      // @ts-ignore
      navigator.msMaxTouchPoints > 0)
  );
};

const CustomCursor = () => {
  // ✅ Correct mobile detection
  if (isTouchDevice()) return null;

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Hover effects
    const addHover = () => {
      ringRef.current?.classList.add("scale-150", "cursor-hover");
    };

    const removeHover = () => {
      ringRef.current?.classList.remove("scale-150", "cursor-hover");
    };

    const hoverTargets = document.querySelectorAll(
      "a, button, [role='button'], input, textarea"
    );

    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="
          fixed top-0 left-0
          w-10 h-10
          rounded-full
          border border-cyan-400
          pointer-events-none
          z-[9999]
          transform-gpu
          transition-transform duration-150 ease-out
        "
      />

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="
          fixed top-0 left-0
          w-2 h-2
          bg-cyan-400
          rounded-full
          pointer-events-none
          z-[9999]
          transform-gpu
        "
      />
    </>
  );
};

export default CustomCursor;
