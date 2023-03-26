import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => { // CanvasLoader displays a percentage of progress while loading 3D resources.
  const { progress } = useProgress(); // useProgress to get the progress object and extract the progress value.
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      > 
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

/* The result of the toFixed(2) method is inserted into the JSX code between braces 
to display directly on the screen, followed by the percentage symbol (%). */

export default CanvasLoader;