import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer } from "@/components/shared/footer";
import { Home } from "@/pages/home";
import { LanguageProvider } from "@/assets/translations/languageProvider";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
