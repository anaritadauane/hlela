import Section from "./Section";
import { CategoriesList } from "./components/CategoriesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CategoriesList />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
