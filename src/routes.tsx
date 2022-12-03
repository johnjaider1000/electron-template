import { Router, Route } from "electron-router-dom";
import Login from "./screens/Login";

const AppRoutes = () => {
  return <Router main={<Route path="/" element={<Login />} />} />;
};

export default AppRoutes;
