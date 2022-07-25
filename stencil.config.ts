import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'component-library',
  outputTargets: [
    react({
      // name of the Stencil Component Library
      componentCorePackage: 'component-library',
      // This file gets generated by React wrapper function and contains definitions of all Wrapper components
      proxiesFile: '../component-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements', 
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
