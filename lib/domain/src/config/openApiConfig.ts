import type { ConfigFile } from '@rtk-query/codegen-openapi';

// This ensures that we're not forced to have an apiFile prop in the root level
// type CustomConfigFile = Partial<ConfigFile> & Pick<ConfigFile, 'schemaFile'>
type CustomConfigFile = ConfigFile;
const config: CustomConfigFile = {
  // TODO - #DW-012 (Fix swagger doc so codegen works with all endpoints) - https://loka-ext.atlassian.net/browse/DW-012
  schemaFile: 'http://localhost:5200/swagger/v1/swagger.json',
  // schemaFile: './openApi.json',
  hooks: true,
  apiFile: './baseApi.ts',
  apiImport: 'emptySplitApi',
  // exportName: 'generalApi',
  // outputFile: '../lib/general.ts',
  // tag: true,
  outputFiles: {
    // '../lib/abogados.ts': {
    //   apiFile: './baseApi.ts',
    //   apiImport: 'emptySplitApi',
    //   filterEndpoints: [/Abogados/],
    //   exportName: 'abogadosApi',
    //   tag: true,
    //   hooks: true,
    // },
    // '../lib/acreedores.ts': {
    //   apiFile: './baseApi.ts',
    //   apiImport: 'emptySplitApi',
    //   filterEndpoints: [/Acreedor/],
    //   exportName: 'acreedoresApi',
    //   tag: true,
    //   hooks: true,
    // },
    '../lib/acreedores.ts': {
      apiFile: './baseApi.ts',
      apiImport: 'emptySplitApi',
      filterEndpoints: [/Acreedor/],
      exportName: 'acreedoresApi',
      tag: true,
      hooks: true,
    },
  },
};

export default config;
