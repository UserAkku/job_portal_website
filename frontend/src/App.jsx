import Home from "./components/Home";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router = {appRouter}/>
    </>
  );
}

export default App;
