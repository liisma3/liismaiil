export const kanbanDefs = `
type Kanban {
  _id:String
  title:String
  description:String
  author:String

  stages: [KanbanStage]

  itemsOrder:[String]
 
  stage: KanbanStage


  storiesOrder: [String]

}
type KanbanTablet{
  title: String
    tablets: [String]
    stageId: Int
     comments: [KanbanComment]  
    description: String
    dueDate: String
}

type KanbanComment {
          id: Int
        comment: String
        token: String
  }
type KanbanGuest {
     token: String
        flag: String
        name: String
        time: String
  }
type KanbanStory {
        id: Int
        title: String
        description: String
        dueDate: String
        priority: String
        attachments: [ImageType]
          guests: [KanbanGuest]
  kanbanTablets:[KanbanTablet]
       comments: [KanbanComment]     
      
  }
type KanbanStage  { 
      id: Int
      title: String
     stories: [KanbanStory]
  }

input StoryInput {
  id:Int
   title: String!
  description:String!
  author:String!
  stageId:Int
  priority:String
  dueDate:String
  commentIds:[String]
  tabletIds:[String]
  
  }
input KanbanInput {
  id:Int
  author:String!
   title: String!
  description:String!
  
  }

type Story {
     id:Int
      title: String!
     description:String!
     stageId:Int
     priority:String
     dueDate:String
     commentIds:[Int]
     tabletIds:[String]
     attachments: [String]
     author:String!
  }

input UpdateStoryInput {
  title: String
  description:String

  stageId:Int
  priority:String
  dueDate:String
  commentIds:[String]
  tabletIds:[String]
  videoLink:String
  video:String
  pdf:String

 }
input RemoveStoryInput {
  id:Int
  title: String
  video:String
  pdf:String

 }

input PromoteStoryInput  {
    id:Int

  title: String
  review:String
  token:String
 }
type RemoveStoryOutput {
  success: Boolean
  message:String
}
type KanbanOutput{
  success:Boolean
  id:Int
  author:String!
  title: String!
  description:String!
}
type PromoteStoryOutput {
  success: Boolean
    message:String
  }
type Query {
    viewerKanban(email:String): Kanban
    storiesByEmail(email:String): [Story!]
    story(titleSlug: String):  Story
}

type Mutation {
    addStory(input: StoryInput): [Story]
    addKanban(input: KanbanInput): KanbanOutput!
    updateStory(input:UpdateStoryInput): Story!
    removeStory(input:RemoveStoryInput): RemoveStoryOutput
    promoteStory(input:PromoteStoryInput ) : PromoteStoryOutput
    sendTelegramStage
  }

`;
