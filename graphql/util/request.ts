import { getSdk } from "@graphql/generated/graphql-request-sdk";
import { GraphQLClient } from "graphql-request";

export const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL!);
export const requestSdk = getSdk(graphqlRequestClient);
