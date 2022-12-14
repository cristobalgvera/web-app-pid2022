/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "fragment TutorialFull on Tutorial {\n  title\n  content\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n\nfragment TutorialCard on Tutorial {\n  title\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n\nfragment TutorialCategories on Tutorial {\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}\n\nfragment TutorialCover on Tutorial {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}": types.TutorialFullFragmentDoc,
    "query getAllTutorials($pagination: PaginationArg, $filters: TutorialFiltersInput) {\n  tutorials(pagination: $pagination, filters: $filters) {\n    data {\n      id\n      attributes {\n        ...TutorialCard\n      }\n    }\n  }\n}\n\nquery getOneTutorial($id: ID!) {\n  tutorial(id: $id) {\n    data {\n      id\n      attributes {\n        ...TutorialFull\n      }\n    }\n  }\n}": types.GetAllTutorialsDocument,
};

export function graphql(source: "fragment TutorialFull on Tutorial {\n  title\n  content\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n\nfragment TutorialCard on Tutorial {\n  title\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n\nfragment TutorialCategories on Tutorial {\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}\n\nfragment TutorialCover on Tutorial {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"): (typeof documents)["fragment TutorialFull on Tutorial {\n  title\n  content\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n\nfragment TutorialCard on Tutorial {\n  title\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n\nfragment TutorialCategories on Tutorial {\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}\n\nfragment TutorialCover on Tutorial {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"];
export function graphql(source: "query getAllTutorials($pagination: PaginationArg, $filters: TutorialFiltersInput) {\n  tutorials(pagination: $pagination, filters: $filters) {\n    data {\n      id\n      attributes {\n        ...TutorialCard\n      }\n    }\n  }\n}\n\nquery getOneTutorial($id: ID!) {\n  tutorial(id: $id) {\n    data {\n      id\n      attributes {\n        ...TutorialFull\n      }\n    }\n  }\n}"): (typeof documents)["query getAllTutorials($pagination: PaginationArg, $filters: TutorialFiltersInput) {\n  tutorials(pagination: $pagination, filters: $filters) {\n    data {\n      id\n      attributes {\n        ...TutorialCard\n      }\n    }\n  }\n}\n\nquery getOneTutorial($id: ID!) {\n  tutorial(id: $id) {\n    data {\n      id\n      attributes {\n        ...TutorialFull\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;