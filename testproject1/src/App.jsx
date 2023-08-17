import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Homepage from "./screens/Homepage";
import Customdiv from "./screens/Customdiv";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Customdiv" element={<Customdiv />} />
    </Routes>
  );
}

export default App;
