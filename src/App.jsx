import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieContextProvider } from "./components/context/MovieDataContext";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <MovieContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<MovieDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </MovieContextProvider>
  );
}

export default App;
