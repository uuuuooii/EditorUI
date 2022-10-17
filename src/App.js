import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
  );
}

export default App;
