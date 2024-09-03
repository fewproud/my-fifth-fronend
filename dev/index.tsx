import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myFifthFronendPlugin, MyFifthFronendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myFifthFronendPlugin)
  .addPage({
    element: <MyFifthFronendPage />,
    title: 'Root Page',
    path: '/my-fifth-fronend',
  })
  .render();
