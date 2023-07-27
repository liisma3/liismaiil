export const tabletDefs = `
#scalar type
scalar DateTime
type Tablet {
    title: String!
    description: String
    grid: Int
    souraNb: Int
    souraName: String
    arabName: String
    wordsComment: [WordCommentType]
    ayahsGrid:[TabletAyahType]
    createdAt:DateTime
    updatedAt:DateTime
}
type TabletGrid {
    title: String!
    description: String
    grid: Int
    souraNb: Int
    souraName: String
    arabName: String
    wordsComment: [WordCommentType]
    ayahsGrid:[TabletAyahType]
    createdAt:DateTime
    updatedAt:DateTime
}
input TabletFilter {
    limit: Int
    page: Int
}
input BookingInput {
  limit:Int
  page:Int
}
type WordCommentType {
 word: String
 comment: String
  index: Int 
  ayah: Int 
}
input WordCommentInput {
 word: String
 comment: String
  index: Int 
  ayah: Int 
}
type TabletAyahType {
 text: String
  numberInSurah: Int
  number: Int
  juz: Int
  soura: String
  slice:String
}
input TabletAyahInput {
 text: String
  numberInSurah: Int
  number: Int
  juz: Int
  soura: String
  slice:String
}

type StatType {
 guests: Int
  time: Int
  suggestions: [Int]
  coll: [String]
  soura: String
}

input TabletGridInput {
    title: String!
    description: String
    grid: Int
    souraNb: Int
    souraName: String
    arabName: String
    wordsComment: [WordCommentInput]
    ayahsGrid:[TabletAyahInput]
    createdAt:DateTime
}

input ValidateTabletInput {
   id: String!
   idProfile: String!
}
input TabletWordInput {
  text: String
  number: Int 
}
input TabletAyahInput {
  text: String
  numberInSurah: Int
  number: Int
  juz: Int
  soura: String
}
input SouraNameNb {
    souraName: String
    souraNb: Int
}

input CreateSourasSectionsInput {
  section: String
  names: [SouraNameNb]
} 
type CreateSourasSectionsOutput {
  success: Boolean
}
type Query {
    tablets: [Tablet!]
    getTabletsBySoura(soura: String): [Tablet!]
    getTabletsByWord(word: String):[Tablet!]
    getStats(id: String): StatType
  }
  type Mutation {
    addTablet(input:TabletGridInput):Tablet
    updateTablet(input:TabletGridInput): Tablet
    validateTablet(input:ValidateTabletInput):Tablet
    removeTablet(id:String):StatType
    createSourasSections(input:CreateSourasSectionsInput): CreateSourasSectionsOutput 
}
enum TabletStatus{
    SOBH
    DOHR
    ASR
    MAGH
    ICHA
  }
`;
