import { MessageTypeData, MessageInput } from './message.types';
const messages = async (
  _: undefined,
  __: undefined,
  { dbFirestore }: { dbFirestore: any }
): Promise<MessageTypeData[] | null> => {
  try {
    const messages: MessageTypeData[] = [];
    return dbFirestore.collection('messages').get().then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        messages.push({ id: doc.id, ...doc.data() });
      });

      return messages;
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

const messageById = async (
  _: undefined,
  { id }: { id: string },
  { dbFirestore }: { dbFirestore: any }
): Promise<Array<MessageTypeData> | undefined> => {
  try {
    const messages: Array<MessageTypeData> = [];
    return dbFirestore.collection('messages').where('receiver', '==', `${id}`).get().then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      return messages;
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

const message = async (
  _: any,
  titleSlug: string,
  { dbFirestore }: { dbFirestore: any }
): Promise<MessageTypeData | undefined> => {
  try {
    const snapshot = await dbFirestore.collection('messages').doc(titleSlug).get()
    if (snapshot.exists) {
      return { ...snapshot.data(), id: titleSlug };
    } else return
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

// Mutations
//  sendMessage(input: MessageInput): Message!

const sendMessage = async (
  _: undefined,
  { input }: { input: MessageInput },
  { dbFirestore, slug }: { dbFirestore: any, slug: any }
): Promise<MessageTypeData | undefined> => {
  try {
    const { title, sender, receiver, content } = input
    const titleSlug = slug(title)
    const docRef = await dbFirestore.collection('messages').doc(titleSlug);
    return docRef.get().then(async (snapshot: any) => {
      if (snapshot.exists) {

        return snapshot.data()
      } else {
        await docRef.set({ title, sender, receiver, content });
        const snapshot = await dbFirestore.collection('messages').doc(titleSlug).get()
        return snapshot.data()
      }
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

const removeMessage = async (_: undefined, { titleSlug }: { titleSlug: string }, { dbFirestore }: { dbFirestore: any }): Promise<boolean> => {
  try {
    await dbFirestore.collection('messages').doc(titleSlug).delete()
    return true;
  } catch (error: any) {
    throw new Error(error);
  }
};

const MessageResolver = {
  Query: {
    messages,
    message,
    messageById,
  },
  Mutation: {
    sendMessage,
    removeMessage,
  },
};
export default MessageResolver;
