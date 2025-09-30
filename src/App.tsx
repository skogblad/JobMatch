import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Router";

const App = () => {
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
