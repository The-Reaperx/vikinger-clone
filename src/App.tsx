import Layout from "./layout/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsfeed from "./NewsFeed";
import Overview from "./Overview";
import Profile from "./Profile";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="newsfeed" element={<Newsfeed />} />
          <Route path="overview" element={<Overview />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
