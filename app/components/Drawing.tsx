import Canvas from "./Canvas";
import Colors from "./Colors";

const Drawing = () => {
  return (
    <div className="flex-[3] flex flex-col gap-y-1 border">
      <Canvas />
      <Colors />
    </div>
  );
};

export default Drawing;
