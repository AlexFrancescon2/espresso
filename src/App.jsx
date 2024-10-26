import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { Contacts } from "@/pages/contacts";
import { NotFound } from "@/pages/404";
import { Header } from "@/components/shared/header";
import { LanguageProvider } from "@/assets/translations/languageProvider";
import { Footer } from "@/components/shared/footer";
import { PrivacyPolicy } from "@/pages/privacy-policy";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
