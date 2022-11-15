import { getSdk } from "@graphql/generated/graphql-request-sdk";
import { GraphQLClient } from "graphql-request";

const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL!, {
  headers: {
    Authorization: `Bearer ${process.env.CMS_API_KEY}`,
  },
});

export const requestSdk = getSdk(graphqlRequestClient);
