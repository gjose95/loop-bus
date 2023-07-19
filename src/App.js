import "./App.css";
import Layout from "./Layout";
import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  return (
    <Layout content={{
      Main,
      About
    }} />
  );
}

export default App;
