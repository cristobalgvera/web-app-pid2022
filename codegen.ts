import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.CMS_GRAPHQL_URL,
  documents: ["graphql/**/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "graphql/generated/": {
      preset: "client",
      plugins: [],
    },
    "graphql/generated/graphql-request-sdk.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
      config: {
        documentMode: "documentNode",
      },
    },
    "graphql/generated/react-query-sdk.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-query"],
      config: {
        fetcher: "graphql-request",
      },
    },
  },
};

export default config;
