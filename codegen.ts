import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.CMS_GRAPHQL_URL,
  documents: ["!graphql/generated/", "graphql/**/*.gql.ts"],
  generates: {
    "graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
