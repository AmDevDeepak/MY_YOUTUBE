import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = new createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer/>
        },
        {
          path: "watch",
          element: <WatchPage/>
        }
      ]
    },
  ]);
  return (
    <Provider store={store}>
      <div className="relative w-full">
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
