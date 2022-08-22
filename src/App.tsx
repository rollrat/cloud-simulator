import React from "react";
import logo from "./logo.svg";
import "./App.css";

import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";

import WorkspaceWidget, { DemoButton } from "./workspace/WorkspaceWidget";

const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: "Client",
  color: "rgb(0,192,255)",
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort("Out");

// node 2
const node2 = new DefaultNodeModel({
  name: "Server",
  color: "rgb(192,255,0)",
});
node2.setPosition(200, 100);
let port2 = node2.addInPort("Int");

const link = port1.link<DefaultLinkModel>(port2);
// link.addLabel("Hello World!");

const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

function App() {
  return (
    <div className="App" style={{ width: "1000px", height: "1000px" }}>
      <WorkspaceWidget
        buttons={[
          <DemoButton key={1}>Enable canvas drag</DemoButton>,
          <DemoButton key={2}>Disable canvas drag</DemoButton>,
        ]}
      >
        <CanvasWidget className="diagram-container" engine={engine} />
      </WorkspaceWidget>
    </div>
  );
}

export default App;
