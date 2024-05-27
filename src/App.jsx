import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./components/context/MovieDataContext";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <MovieContextProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="details" element={<MovieDetail />} />
      </Routes>
    </MovieContextProvider>
  );
}

export default App;
