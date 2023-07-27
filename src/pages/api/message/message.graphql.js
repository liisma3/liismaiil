export const messageDefs = `
type Message {
  _id:ID!
  title: String!
  titleSlug:String!
  content:String!
  sender: String
  receiver:String
  read: Boolean
  updatedAt: String
  createdAt: String
  }
type Query {
    messages: [Message!]
    messageById(id: String):  Message
    message(titleSlug: String):  Message
}

input MessageInput {
  title: String!
  sender: String
  receiver:[String]
  content:String!
  read: Boolean
 }

type Mutation {
    sendMessage(input: MessageInput): Message!
    removeMessage(titleSlug:String): Boolean
  }
`;
