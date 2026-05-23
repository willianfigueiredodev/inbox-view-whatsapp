import { useEffect, useRef, useState } from 'react';

const DEFAULT_SIDEBAR_WIDTH = 336;
const MIN_SIDEBAR_WIDTH = 280;
const MAX_SIDEBAR_WIDTH = 460;

export function useInboxResizablePanels() {
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      if (!isDraggingRef.current) return;

      const viewportWidth = window.innerWidth;
      const maxWidth = Math.min(MAX_SIDEBAR_WIDTH, Math.floor(viewportWidth * 0.48));
      const nextWidth = Math.min(Math.max(event.clientX - 18, MIN_SIDEBAR_WIDTH), maxWidth);
      setSidebarWidth(nextWidth);
    }

    function handlePointerUp() {
      isDraggingRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  function startDragging() {
    if (window.innerWidth <= 900) return;

    isDraggingRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  return {
    sidebarWidth,
    startDragging,
  };
}
