
import ReactDOM from 'react-dom/client'
import './index.css'
// core styles are required for all packages
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
