import graphql from 'babel-plugin-relay/macro';

export const profileUserFragment = graphql`
fragment profileUserFragment on User @refetchable(queryName: "UserProfileRefetchQuery"){
    profile {
        id
      fullAddress
      jobTypes
      locationLatitude
      locationLongitude
      textIntroduction
      totalExperience
      rateMode
      freelancerRate {
        value
        currency {
          symbol
        }
      }
      freelancerType {
        id
        name
        skills {
          id
          name
          slug
        }
      }
  }
}
`