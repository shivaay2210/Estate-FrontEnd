import HomePage from './Routes/HomePage/HomePage'
import ListPage from './Routes/ListPage/ListPage'
import SinglePage from './Routes/SinglePage/SinglePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Routes/Layout/Layout';
import ProfilePage from './Routes/ProfilePage/ProfilePage'
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "list",
          element: <ListPage />
        },
        {
          path: ":id",
          element: <SinglePage />
        },
        {
          path: "profile",
          element: <ProfilePage />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
