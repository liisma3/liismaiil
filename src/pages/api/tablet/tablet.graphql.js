export const tabletDefs = `
#scalar type
scalar DateTime
type Tablet {
    id: String!
    title: String!
    description: String
    arabName: String
    soura: String
    souraNumber: Int
    tabletWords: [TabletWord]
    ayahs:[TabletAyahType]
    createdAt:DateTime
    updatedAt:DateTime
}
type TabletGrid {
    title: String
    description: String
    grid: Int
    group: [Int]
    souraNb: String
    souraName: String
    arabName: String
    tabletWords: [WordsCommentType]
    ayahs:[[TabletAyahType]]
    createdAt:DateTime
    updatedAt:DateTime
}
input TabletGridsInput {
  uid: String!
  title: String!
  description: String
  souraNb: String
  souraName: String
  arabName: String
  tabletWords: [WordCommentInput]
  grid: Int
  group: [Int]
  ayahs:[[TabletAyahInput]]
  
}
type TabletTemplate {
   souraNb: String
    souraName:String!
    description: String
    group:Int
    arabName: String
    ayahs: [TabletAyahType]
    createdAt:DateTime
    updatedAt:DateTime
}
type WordsCommentType {
 word: String
 comment: String
  index: Int 
  ayah: Int 
}
input TabletFilter {
    limit: Int
    page: Int
}
input BookingInput {
  limit:Int
  page:Int
}
type TabletWord {
 text: String
  number: Int 
}
type TabletAyahType {
 text: String
numberInSurah: Int
number: Int
juz: Int
soura: String
slice:String
}
type TabletAyahGridType {
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

input TabletInput {
   id: String!
    title: String!
    description: String
    arabeName: String
    soura: String
    souraNumber: Int
    tabletWords: [TabletWordInput]
    ayahs:[TabletAyahInput]
}
input TabletTemplateInput {
  uid:String  
  souraNb: String
    souraName:String!
    description: String
    arabName: String
    ayahs: [TabletAyahInput]
    
}
input WordCommentInput {
 word: String
 comment: String
  index: Int 
  ayah: Int 
}

type WordCommentType {
  word: String
  comment: String
   index: Int 
   ayah: Int 
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
  souraName: String
  slice:String
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
type AddTabletOutput{
  success:Boolean
  message:String
}
type RemoveOutput {
  success:Boolean
}

type Query {
    tablets: [Tablet!]
    getTabletsBySoura(soura: String): [Tablet!]
    getTabletTemplates: [TabletTemplate!]
    getTemplateBySoura(soura: String):  [TabletTemplate!]
    getTabletsByWord(word: String):[Tablet!]
    getStats(id: String): StatType
  }
  type Mutation {
    addTablet(input:TabletInput):Tablet
    addTabletTemplate(input:TabletTemplateInput):AddTabletOutput
    addTabletGrids(input:TabletGridsInput):AddTabletOutput 
    updateTablet(input:TabletInput): Tablet
    validateTablet(input:ValidateTabletInput):Tablet
    removeTablet(id:String):StatType
    removeAllTemplate:RemoveOutput
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
