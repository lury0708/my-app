import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from './screens/Home';
import Books from './screens/Books';
import Notice from './screens/Notice';
import NoticeBlog from './screens/NoticeBlog';
import Mypage from './screens/Mypage';
import Maps from './screens/Maps';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <Skills />
            <Projects />
            <Home />
            <Contact />
            <Footer />
          </>} />
          <Route path="/Books" element={<>
            <Books />
            <Footer />
          </>} />
          <Route path="/Notice" element={<>
            <Notice />
            <Footer />
          </>} />
          <Route path='/Notice/:id' component={NoticeBlog} />
          <Route path="/Maps" element={<>
            <Maps />
            <Footer />
          </>} />
          <Route path="/Mypage" element={<>
            <Mypage />
            <Footer />
          </>} />
          
          <Route path="/*" element={<>
            <h1>Page Not Found</h1>
          </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
