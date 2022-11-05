import { graphql } from "@graphql/generated";

export const TutorialFull = graphql(`
fragment TutorialFull on Tutorial {
  title
  content
  summary
  ...TutorialCover
  ...TutorialCategories
}
`);

export const TutorialCard = graphql(`
fragment TutorialCard on Tutorial {
  title
  summary
  ...TutorialCover
  ...TutorialCategories
}
`);

export const TutorialCategories = graphql(`
fragment TutorialCategories on Tutorial {
  categories {
    data {
      attributes {
        name
      }
    }
  }
}
`);

export const TutorialCover = graphql(`
fragment TutorialCover on Tutorial {
  cover {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
}
`)
