//My queries

export const queryCoursesFromLoggedTrainer = `
  query CoursesFromATrainer($email: String!) {
    courses(where: {trainers_some: {_search: "", email: $email}}) {
      name
    }
  }
`;

export const queryCoursesAthletesFromATrainer = `
query CoursesAthletesFromATrainer($email: String!) {
    courses(where: {trainers_some: {_search: "", email: $email}}) {
      name
      athletes {
        name
        presence
      }
    }
  } 
`;
export const queryTrainer = `
  {
    trainers {
      name
      lastName
      email
      courses {
        name
      }
    }
  }
`;
