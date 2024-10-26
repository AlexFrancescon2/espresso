import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { About } from "@/pages/about";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Home } from "@/pages/home";
import { LanguageProvider } from "@/assets/translations/languageProvider";
import { NotFound } from "@/pages/404";
import { PrivacyPolicy } from "@/pages/privacy-policy";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
