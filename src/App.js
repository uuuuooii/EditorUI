import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
