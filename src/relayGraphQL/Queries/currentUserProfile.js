import graphql from 'babel-plugin-relay/macro';

// Define a query
export const currentUserProfileQuery = graphql`
  query currentUserProfileQuery {
      currentUser{
            id
            name
            jobApplicationsCount
            email
            avatarUrl
            status
            ...UserAnswers_user
            ...profileUserFragment
            ...UserSkills_user      
            ...JobOpportunities_user          
    }
  }
`;

