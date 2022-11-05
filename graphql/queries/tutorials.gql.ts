import { graphql } from "@graphql/generated";

export const getAllTutorials = graphql(`query GetAllTutorials($pagination: PaginationArg!) {
  tutorials (pagination: $pagination) {
    data {
      id
      attributes {
        title
      }
    }
  }
}`);
