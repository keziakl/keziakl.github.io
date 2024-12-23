import './App.css';
import TopBar from './components/TopBar.tsx';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import BlogArticle from "./components/BlogArticle.tsx";
import AboutMe from './pages/AboutMe.tsx';
import Grievances from './pages/Grievances.tsx';
import Projects from './pages/Projects.tsx';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
     <TopBar />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Grievances />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
