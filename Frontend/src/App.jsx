import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/movie" Component={MoviePage} />
      </Routes>
    </>
  );
}

export default App;
