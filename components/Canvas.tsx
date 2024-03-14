"use client";
import { useCanvasStore } from "@/app/hooks/useCanvas";
import { useEffect, useRef } from "react";

const Canvas = () => {
  const { setCanvas, canvas } = useCanvasStore((state) => ({
    setCanvas: state.setCanvas,
    canvas: state.canvas,
  }));

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    setCanvas(canvasRef.current);
  }, [canvasRef]);

  return <canvas ref={canvasRef} className="h-full w-full bg-white"></canvas>;
};

export default Canvas;
