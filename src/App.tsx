import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkateDocPage from "./pages/SkateDocPage";

/*
const Overlay = styled.div`y
  background-color: gray;
  opacity: 20%;
  width: 100%;
  height: 100%;
`;
*/

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage></HomePage>} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/contact" element={<ContactPage></ContactPage>} />
            <Route path="/about" element={<AboutPage></AboutPage>} />
            <Route path="/projects" element={<ProjectsPage></ProjectsPage>} />
            <Route
              path="/projects/project1"
              element={<SkateDocPage></SkateDocPage>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

/*
<div>
      <BrowserRouter>
        <Routes>
          <Route
        </Routes>
      </BrowserRouter>
    </div>
*/
