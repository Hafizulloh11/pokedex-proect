import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';
import { Routes } from 'routes';

import 'assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <MantineProvider withNormalizeCSS>
    <Routes />
    <Notifications position="top-right" />
  </MantineProvider>
);
