import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPages/LandingPage";

function App() {
  const renderComponent = () => {
    return (
      <>
        <Navbar />
        <LandingPage />
      </>
    );
  };

  return renderComponent();
}

export default App;
