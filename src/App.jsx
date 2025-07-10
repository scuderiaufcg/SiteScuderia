import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
