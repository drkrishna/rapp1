import react from "react";
import { createRoot } from "react-dom/client";
import MyList from "./list";

const root = document.getElementById("root");
const domNode = createRoot(root);
domNode.render(<MyList />);
