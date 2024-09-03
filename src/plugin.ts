import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myFifthFronendPlugin = createPlugin({
  id: 'my-fifth-fronend',
  routes: {
    root: rootRouteRef,
  },
});

export const MyFifthFronendPage = myFifthFronendPlugin.provide(
  createRoutableExtension({
    name: 'MyFifthFronendPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
