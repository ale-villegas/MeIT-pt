import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { MoviesProvider } from "./context/MoviesContext.tsx";
import { getMovies } from "./services/getMovies.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MoviesProvider fetchData={getMovies}>
    <Router>
      <App />
    </Router>
  </MoviesProvider>
);
