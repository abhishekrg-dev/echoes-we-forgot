import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { RouteTransitionProvider } from "./components/RouteTransition";
import { LandingPage } from "./pages/LandingPage";
import { SoundMuseum } from "./pages/SoundMuseum";
import { ArtMuseum } from "./pages/ArtMuseum";

function AppRoutes() {
  return (
    <RouteTransitionProvider>
      {(navigateWithTransition) => (
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                onEnterSound={() =>
                  navigateWithTransition("/sound-museum", "ENTERING SOUND MUSEUM...")
                }
                onEnterArt={() =>
                  navigateWithTransition("/art-museum", "ENTERING ART MUSEUM...")
                }
              />
            }
          />
          <Route path="/sound-museum" element={<SoundMuseum />} />
          <Route path="/art-museum" element={<ArtMuseum />} />
        </Routes>
      )}
    </RouteTransitionProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
