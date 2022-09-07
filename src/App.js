import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";
export default function App() {
  const isLoading = false;
  if (isLoading) return <div className="loading">Loading...</div>;
  const AlertFromHero = () => {
    alert("aleting hero from app");
  };
  return (
    <div className="container-fluid App">
      <Header />
      <main className="content">
        <Hero handleAlert={AlertFromHero} />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
