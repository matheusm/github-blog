import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Blog } from "./pages/Blog";
import { DefaultLayout } from "./layouts/default";
import { Post } from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Blog />,
      },
      {
        path: "/:id",
        element: <Post />,
      }
    ]
  },
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
