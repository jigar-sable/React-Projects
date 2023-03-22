import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chats from "./components/Chats";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
