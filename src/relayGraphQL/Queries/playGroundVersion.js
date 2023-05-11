`
  query currentUser {
      currentUser{
            id,
            name,
            jobOpportunities(first: 20){
              edges{
                cursor,
                node{
                  title,
                  status,
                  availabilityType,
                  autoSendScreeningRequests,
                  city,
                  country,
                  description,
                  descriptionExperience,
                  descriptionResponsibilities,
                  expiresAt,
                  firm{
                    name,
                    description
                  },
                  contract{
                    id,
                    country,
                    answers{
                      id,
                      available,
                    createdAt,          
                    optimizedUrl,
                    posterUrl,
                    public,
                    url,
                    question{
                      id,
                      title,
                      description
                    }
                    },
                    contractRequests{
                      id                      
                    }
                  }
                  user{
                    id,
                    email,
                    name
                  }
                  hiringManager{
                  id,name,
                  },
                  hiringManagerType,
                  rateMode,
                  jobSkills{
                    required,
                    requiredYears,
                    skill{
                      id,
                      name
                    }
                  },
                  freelancerRate{
                    value,
                    currency{
                      symbol
                    }
                  }
                  clientRate{
                    value
                  }
                }
              }
           }

           
            jobApplicationsCount,
            email,
            avatarUrl,
            status,
            answers{
              id,
              available,
              createdAt,          
              optimizedUrl,
              posterUrl,
              public,
              url,
              question{
                  id
                  description,
                  title
                }          
            },
            profile{
              id,
              fullAddress,
              jobTypes,
              locationLatitude,
              locationLongitude,
              textIntroduction,
              totalExperience,
              rateMode,
              freelancerRate{
                value,
                currency{
                  symbol,
                }
              },
              freelancerType{
                id,
                name
                skills{
                  id,
                  name,
                  slug
                }
              }
            },
            userSkills{
              id,
              experience,
              skill{
                id ,
                name,
                slug        
              }
        }
      
    }
  }
`;
