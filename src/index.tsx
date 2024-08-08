import { createRoot } from "react-dom/client";
import ImageLoader from "./components/image-loader";
import useImageMetadata from "./hooks/useImageMetadata";

const App = () => {
  return <div style={{ display: "flex", flexDirection: "column" }}></div>;
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export { ImageLoader, useImageMetadata };
