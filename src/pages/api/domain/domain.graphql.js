export const domainDefs = `
#scalar type
scalar DateTime
type Domain {
  _id: ID!
  title:String
  viewers: [Viewer]
  image:String
  city:String
  country:String
  zip:String
  cards:[Card]
  tablets:[Tablet]
 rewards: [String]
  updatedAt: DateTime
  createdAt: DateTime
}

input CreateDomainInput {
  title:String
  image:String
  city:String
  country:String
  zip:String
  cards:[String]
  tablets:[String]
  selections:[String]
  rewards: String
 }


input UpdateDomainInput {
  titleSlug:String
  input:CreateDomainInput
}

input AddViewerInput {
  titleSlug:String
  login:String
}


type Query {
    domain(titleSlug: String): Domain!
    domains: [Domain!]
}
type Mutation {
    addDomain(input:CreateDomainInput):Domain
    updateDomain(input:UpdateDomainInput):Domain
  removeDomain(titleSlug: String):Boolean
  }
`;
