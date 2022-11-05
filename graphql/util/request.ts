import { request as graphqlRequest, Variables } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export function request<TDocument = unknown>(
  requestDocument: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
): Promise<TDocument> {
  return graphqlRequest<TDocument, Variables>(process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL!, requestDocument, variables, {});
}
