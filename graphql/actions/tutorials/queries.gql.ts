import { graphql } from "@graphql/generated";

export const getAllTutorials = graphql(`
query GetAllTutorials($pagination: PaginationArg) {
  tutorials(pagination: $pagination) {
    data {
      id
      attributes {
        ...TutorialCard
      }
    }
  }
}
`);

export const getOneTutorial = graphql(`
query GetOneTutorial($id: ID!) {
  tutorial(id: $id) {
    data {
      id
      attributes {
        ...TutorialFull
      }
    }
  }
}
`);
