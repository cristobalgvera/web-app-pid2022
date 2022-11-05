import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.CMS_GRAPHQL_SCHEMA_URL,
  // Disabled until the app has any custom query
  // documents: ["app/**/*.ts*", "components/**/*.ts*"],
  generates: {
    "./generated/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
