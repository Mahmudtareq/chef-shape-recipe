import ReactDOM from "react-dom/client";
import "./index.css";
// core styles are required for all packages
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </MantineProvider>
);
