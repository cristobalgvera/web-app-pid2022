/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query GetAllTutorials($pagination: PaginationArg) {\n  tutorials(pagination: $pagination) {\n    data {\n      id\n      attributes {\n        title\n        summary\n        categories {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        cover {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetAllTutorialsDocument,
};

export function graphql(source: "query GetAllTutorials($pagination: PaginationArg) {\n  tutorials(pagination: $pagination) {\n    data {\n      id\n      attributes {\n        title\n        summary\n        categories {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        cover {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetAllTutorials($pagination: PaginationArg) {\n  tutorials(pagination: $pagination) {\n    data {\n      id\n      attributes {\n        title\n        summary\n        categories {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        cover {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;