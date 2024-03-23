import { create } from "zustand";

type CanvasStore = {
  isDrawing: boolean;
  rect: DOMRect | null;
  canvas: CanvasRenderingContext2D | null;
  lineCap: CanvasLineCap;
  setCanvas: (canvas: HTMLCanvasElement) => void;
  setIsDrawing: (bool: boolean) => void;
  setRect: (values: DOMRect) => void;
};

export const useCanvasStore = create<CanvasStore>((set) => {
  return {
    isDrawing: false,
    rect: null,
    canvas: null,
    lineCap: "round",
    setCanvas: (canvas) =>
      set((state) => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const context = canvas.getContext("2d");
        if (!context) return state;
        return { ...state, canvas: context };
      }),
    setIsDrawing: (bool) => set({ isDrawing: bool }),
    setRect: (values) => set({ rect: values }),
  };
});
