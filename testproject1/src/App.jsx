import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Homepage from "./screens/Homepage";
import Customdiv from "./screens/Customdiv";
import Detailpage from "./screens/Detailpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Customdiv" element={<Customdiv />} />
      <Route path="/Detailpage" element={<Detailpage />} />
    </Routes>
  );
}

export default App;
