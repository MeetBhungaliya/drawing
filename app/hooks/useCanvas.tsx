import { create } from "zustand";

type CanvasStore = {
  canvas: CanvasRenderingContext2D | null;
  lineCap: CanvasLineCap;
  setCanvas: (canvas: HTMLCanvasElement) => void;
};

export const useCanvasStore = create<CanvasStore>((set) => {
  return {
    canvas: null,
    lineCap: "round",
    setCanvas: (canvas) =>
      set((state) => {
        const context = canvas.getContext("2d");
        if(!context) return state
        return { canvas: context };
      }),
  };
});
