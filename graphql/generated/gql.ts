/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\nfragment TutorialFull on Tutorial {\n  title\n  content\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n": types.TutorialFullFragmentDoc,
    "\nfragment TutorialCard on Tutorial {\n  title\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n": types.TutorialCardFragmentDoc,
    "\nfragment TutorialCategories on Tutorial {\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}\n": types.TutorialCategoriesFragmentDoc,
    "\nfragment TutorialCover on Tutorial {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}\n": types.TutorialCoverFragmentDoc,
    "\nquery GetAllTutorials($pagination: PaginationArg) {\n  tutorials(pagination: $pagination) {\n    data {\n      id\n      attributes {\n        ...TutorialCard\n      }\n    }\n  }\n}\n": types.GetAllTutorialsDocument,
    "\nquery GetOneTutorial($id: ID!) {\n  tutorial(id: $id) {\n    data {\n      id\n      attributes {\n        ...TutorialFull\n      }\n    }\n  }\n}\n": types.GetOneTutorialDocument,
};

export function graphql(source: "\nfragment TutorialFull on Tutorial {\n  title\n  content\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n"): (typeof documents)["\nfragment TutorialFull on Tutorial {\n  title\n  content\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n"];
export function graphql(source: "\nfragment TutorialCard on Tutorial {\n  title\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n"): (typeof documents)["\nfragment TutorialCard on Tutorial {\n  title\n  summary\n  ...TutorialCover\n  ...TutorialCategories\n}\n"];
export function graphql(source: "\nfragment TutorialCategories on Tutorial {\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}\n"): (typeof documents)["\nfragment TutorialCategories on Tutorial {\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}\n"];
export function graphql(source: "\nfragment TutorialCover on Tutorial {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}\n"): (typeof documents)["\nfragment TutorialCover on Tutorial {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}\n"];
export function graphql(source: "\nquery GetAllTutorials($pagination: PaginationArg) {\n  tutorials(pagination: $pagination) {\n    data {\n      id\n      attributes {\n        ...TutorialCard\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetAllTutorials($pagination: PaginationArg) {\n  tutorials(pagination: $pagination) {\n    data {\n      id\n      attributes {\n        ...TutorialCard\n      }\n    }\n  }\n}\n"];
export function graphql(source: "\nquery GetOneTutorial($id: ID!) {\n  tutorial(id: $id) {\n    data {\n      id\n      attributes {\n        ...TutorialFull\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetOneTutorial($id: ID!) {\n  tutorial(id: $id) {\n    data {\n      id\n      attributes {\n        ...TutorialFull\n      }\n    }\n  }\n}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;