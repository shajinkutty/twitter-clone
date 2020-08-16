import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* feeds */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
