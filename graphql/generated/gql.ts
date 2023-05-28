/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ChapterEntry on Chapter {\n  title\n  content\n  topics {\n    data {\n      id\n      attributes {\n        ...TopicCard\n      }\n    }\n  }\n}\n\nfragment ChapterIndex on ChapterEntity {\n  id\n  attributes {\n    title\n    ...TopicIndex\n  }\n}\n\nfragment ChapterCover on Chapter {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}": types.ChapterEntryFragmentDoc,
    "query getTutorialIndexes {\n  chapters {\n    data {\n      ...ChapterIndex\n    }\n  }\n}\n\nquery getChapterById($id: ID!) {\n  chapter(id: $id) {\n    data {\n      id\n      attributes {\n        ...ChapterEntry\n      }\n    }\n  }\n}": types.GetTutorialIndexesDocument,
    "fragment SubtopicEntry on Subtopic {\n  title\n  content\n}\n\nfragment SubtopicIndex on Topic {\n  subtopics {\n    data {\n      id\n      attributes {\n        title\n      }\n    }\n  }\n}\n\nfragment SubtopicCard on Subtopic {\n  title\n  summary\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}": types.SubtopicEntryFragmentDoc,
    "query getSubtopicById($id: ID!) {\n  subtopic(id: $id) {\n    data {\n      id\n      attributes {\n        ...SubtopicEntry\n      }\n    }\n  }\n}": types.GetSubtopicByIdDocument,
    "fragment TopicEntry on Topic {\n  title\n  content\n  subtopics {\n    data {\n      id\n      attributes {\n        ...SubtopicCard\n      }\n    }\n  }\n}\n\nfragment TopicIndex on Chapter {\n  topics {\n    data {\n      id\n      attributes {\n        title\n        ...SubtopicIndex\n      }\n    }\n  }\n}\n\nfragment TopicCard on Topic {\n  title\n  summary\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}": types.TopicEntryFragmentDoc,
    "query getTopicById($id: ID!) {\n  topic(id: $id) {\n    data {\n      id\n      attributes {\n        ...TopicEntry\n      }\n    }\n  }\n}": types.GetTopicByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ChapterEntry on Chapter {\n  title\n  content\n  topics {\n    data {\n      id\n      attributes {\n        ...TopicCard\n      }\n    }\n  }\n}\n\nfragment ChapterIndex on ChapterEntity {\n  id\n  attributes {\n    title\n    ...TopicIndex\n  }\n}\n\nfragment ChapterCover on Chapter {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"): (typeof documents)["fragment ChapterEntry on Chapter {\n  title\n  content\n  topics {\n    data {\n      id\n      attributes {\n        ...TopicCard\n      }\n    }\n  }\n}\n\nfragment ChapterIndex on ChapterEntity {\n  id\n  attributes {\n    title\n    ...TopicIndex\n  }\n}\n\nfragment ChapterCover on Chapter {\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTutorialIndexes {\n  chapters {\n    data {\n      ...ChapterIndex\n    }\n  }\n}\n\nquery getChapterById($id: ID!) {\n  chapter(id: $id) {\n    data {\n      id\n      attributes {\n        ...ChapterEntry\n      }\n    }\n  }\n}"): (typeof documents)["query getTutorialIndexes {\n  chapters {\n    data {\n      ...ChapterIndex\n    }\n  }\n}\n\nquery getChapterById($id: ID!) {\n  chapter(id: $id) {\n    data {\n      id\n      attributes {\n        ...ChapterEntry\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SubtopicEntry on Subtopic {\n  title\n  content\n}\n\nfragment SubtopicIndex on Topic {\n  subtopics {\n    data {\n      id\n      attributes {\n        title\n      }\n    }\n  }\n}\n\nfragment SubtopicCard on Subtopic {\n  title\n  summary\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"): (typeof documents)["fragment SubtopicEntry on Subtopic {\n  title\n  content\n}\n\nfragment SubtopicIndex on Topic {\n  subtopics {\n    data {\n      id\n      attributes {\n        title\n      }\n    }\n  }\n}\n\nfragment SubtopicCard on Subtopic {\n  title\n  summary\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSubtopicById($id: ID!) {\n  subtopic(id: $id) {\n    data {\n      id\n      attributes {\n        ...SubtopicEntry\n      }\n    }\n  }\n}"): (typeof documents)["query getSubtopicById($id: ID!) {\n  subtopic(id: $id) {\n    data {\n      id\n      attributes {\n        ...SubtopicEntry\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment TopicEntry on Topic {\n  title\n  content\n  subtopics {\n    data {\n      id\n      attributes {\n        ...SubtopicCard\n      }\n    }\n  }\n}\n\nfragment TopicIndex on Chapter {\n  topics {\n    data {\n      id\n      attributes {\n        title\n        ...SubtopicIndex\n      }\n    }\n  }\n}\n\nfragment TopicCard on Topic {\n  title\n  summary\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"): (typeof documents)["fragment TopicEntry on Topic {\n  title\n  content\n  subtopics {\n    data {\n      id\n      attributes {\n        ...SubtopicCard\n      }\n    }\n  }\n}\n\nfragment TopicIndex on Chapter {\n  topics {\n    data {\n      id\n      attributes {\n        title\n        ...SubtopicIndex\n      }\n    }\n  }\n}\n\nfragment TopicCard on Topic {\n  title\n  summary\n  cover {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTopicById($id: ID!) {\n  topic(id: $id) {\n    data {\n      id\n      attributes {\n        ...TopicEntry\n      }\n    }\n  }\n}"): (typeof documents)["query getTopicById($id: ID!) {\n  topic(id: $id) {\n    data {\n      id\n      attributes {\n        ...TopicEntry\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;