import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.CMS_GRAPHQL_SCHEMA_URL,
  documents: ["!graphql/generated/", "graphql/**/*.gql.ts"],
  generates: {
    "graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
