"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { useCanvasStore } from "@/app/hooks/useCanvas";

const Canvas = () => {
  const { isDrawing, rect, canvas, setCanvas, setIsDrawing, setRect } =
    useCanvasStore((state) => ({
      isDrawing: state.isDrawing,
      rect: state.rect,
      canvas: state.canvas,
      setIsDrawing: state.setIsDrawing,
      setCanvas: state.setCanvas,
      setRect: state.setRect,
    }));

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    setRect(canvasRef.current.getBoundingClientRect());
    setCanvas(canvasRef.current);
  }, [canvasRef]);

  const getCanvasRect = useCallback(
    (element: React.MouseEvent | React.TouchEvent) => {
      if (!rect) return null;

      let clientX, clientY;

      // Check if it's a touch event
      if ("touches" in element) {
        clientX = element.touches[0].clientX;
        clientY = element.touches[0].clientY;
      } else {
        clientX = (element as React.MouseEvent).clientX;
        clientY = (element as React.MouseEvent).clientY;
      }

      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    },
    [rect]
  );

  const onDrawStart = (
    e: React.MouseEvent | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    if (!canvas) return;
    const rect = getCanvasRect(e);
    if (!rect) return;

    setIsDrawing(true);
    canvas.beginPath();
    canvas.moveTo(rect.x, rect.y);
  };

  const onDraw = (
    e: React.MouseEvent | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    if (!canvas || !isDrawing) return;

    const rect = getCanvasRect(e);
    if (!rect) return;

    canvas.lineTo(rect.x, rect.y);
    canvas.stroke();
  };

  const onDrawEnd = () => setIsDrawing(false);

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onDrawStart}
      onMouseMove={onDraw}
      onMouseUp={onDrawEnd}
      onTouchStart={onDrawStart}
      onTouchMove={onDraw}
      onTouchEnd={onDrawEnd}
      className="w-full h-full bg-white"
    ></canvas>
  );
};

export default Canvas;
