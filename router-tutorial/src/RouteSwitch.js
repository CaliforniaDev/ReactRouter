import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Friends from "./Friends";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;