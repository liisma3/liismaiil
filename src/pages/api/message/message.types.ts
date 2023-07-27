// abonnement : free/ org

export type MessageTypeData = {
  _id: string;
  title: string;
  titleSlug: string;
  content: string;
  sender: string;
  receiver: string;
  read: boolean;
}
export type MessageInput = {
  title: string
  titleSlug: string
  content: string
  sender: string
  receiver: string
}

export type MessageType = {
  message: MessageTypeData;
}
export type MessagesType = {
  messages: MessageTypeData[];
} 
