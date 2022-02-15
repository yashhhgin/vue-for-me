import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculation";
import ReusableModel from "./pages/ReusableModel";
import UserList from "./pages/UserCrud";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/reusable-model", component: ReusableModel },
  { path: "/users-list", component: UserList }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
