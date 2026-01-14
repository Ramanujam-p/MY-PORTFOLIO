import { useEffect, useState } from "react";

const useScrollSpy = (ids: string[], offset = 120) => {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let currentId = activeId;

      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          currentId = id;
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
