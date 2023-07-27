import { DateTimeResolver } from 'graphql-scalars';
import {
  AddViewerInput, AddViewerOutput, UpdateViewerInput, CardBackInput, AffiliateRequestType,
  SigninViewerInput, ViewerTypeData, UpdateViewerAddressInput,
  ConnectPayoutInput, EnrollmentInput, EnrollmentType, GetDiscountInput,
  DiscountProductType, RemoveEnrollmentInput, LiisPassType, RegisterEventInput, ConnexionProfileType, AddAffiliateTypeInput, ViewerTypeRole, AddConnectionTypeInput, UpdateViewerRoleInput, UpdateViewerRoleOutput, UpdateViewerStatusInput, UpdateViewerStatusOutput,
} from './viewer.types';

import { SendMessageInput, AddConversationFeedInput, DeleteConversationFeedInput } from '@/api/profile/profile.types'
import QRCode from 'qrcode'

export const viewer = async (
  _: undefined,
  { email }: { email: string },
  { ViewerModel }: { ViewerModel: unknown }
): Promise<ViewerTypeData | undefined> => {
  try {
    const viewer = await ViewerModel.findOne({
      email
    }).lean().exec();
    return viewer
  } catch (error: unknown) {
    throw error;
  }
};

export const viewerById = async (
  _: undefined,
  { id }: { id: string },
  { ViewerModel }: { ViewerModel: unknown }
): Promise<ViewerTypeData | undefined> => {
  try {
    const viewer = await ViewerModel.findOne({
      _id: id
    }).lean().exec();
    return { ...viewer, _id: viewer._id }
  } catch (error: unknown) {
    throw error;
  }
};


const viewers = async (
  _: undefined,
  __: undefined,
  { ViewerModel }: { ViewerModel: unknown }
): Promise<ViewerTypeData[] | undefined> => {
  try {
    const viewers = await ViewerModel.find({}).limit(50).lean().exec();
    return viewers
  } catch (error: unknown) {
    console.log({ error });
    throw error;
  }
};



export const signinViewer = async (_: undefined, { input }: { input: SigninViewerInput },
  { ViewerModel }: {
    ViewerModel: unknown,
  }):
  Promise<ViewerTypeData | undefined> => {
  try {
    const { email } = input;

    const viewerExist = await ViewerModel.findOne({
      email
    }).lean().exec();
    if (!viewerExist) {
      throw new Error('Wrong email or password.')
    }

    return { ...viewerExist, _id: viewerExist._id }
    // const { email, login, _id } = viewerExist;
    /* const viewerdataToken = Object.assign({}, { login, email, id: _id.toString() });
    const token = createToken(viewerdataToken);
    await storeRefreshToken(token, viewerdataToken.id); */




  } catch (error: unknown) {
    throw new Error(` ${error.message}`)
  }
}




const registerEvent = async (
  _: undefined,
  { input }: { input: RegisterEventInput },
  { ViewerModel, }:
    {
      ViewerModel: unknown,
    }): Promise<ViewerTypeData | undefined> => {
  try {
    const { email, events } = input;
    console.log({ email, events })
    return ViewerModel.findOne({ email }).then((doc: unknown) => {
      doc.events = events
      console.log({ events: doc.events })

      doc.save()
      return doc
    }).catch((error: unknown) => {
      throw error
    })

  } catch (error: unknown) {
    throw error

  }
}
const sendMessageViewer = async (
  _: undefined,
  { input }: { input: SendMessageInput },
  { ViewerModel, }:
    {
      ViewerModel: unknown,
    }): Promise<ViewerTypeData | undefined> => {
  try {
    const { sender, content, rec, product, date, token } = input;

    return ViewerModel.findOne({ email: rec }).then((doc: unknown) => {
      doc.messages = [...doc.messages, { token, rec, product, sender, content, date }]
      console.log({ savedMessage: doc.messages })

      doc.save()
      return doc
    }).catch((error: unknown) => {
      throw error
    })

  } catch (error: unknown) {
    throw error

  }
}

const addConversationFeed = async (
  _: undefined,
  { input }: { input: AddConversationFeedInput },
  { ViewerModel, }:
    {
      ViewerModel: unknown,
    }): Promise<ViewerTypeData | undefined> => {
  try {
    const { email, sender, content, rec, product, date, } = input;
    console.log({ email, sender, content, rec, product, date })

    await ViewerModel.findOne({ email: sender }).then((doc) => {

      const feedExist = doc.conversationFeed.filter((conversation: unknown) => {
        return (conversation.sender === sender && conversation.product === product)
      })
      const otherFeeds = doc.conversationFeed.filter((conversation: unknown) => {
        return (conversation.sender !== sender && conversation.product !== product)
      })
      console.log({ feedExist })
      console.log({ otherFeeds })
      if (feedExist.length > 0 && otherFeeds.length > 0) {

        doc.conversationFeed = [...otherFeeds, { product, sender, rep: email, messages: [...feedExist[0]['messages'], { content, date, rec }] }]
      } else {
        doc.conversationFeed = [{ product, sender, rep: email, messages: [...feedExist[0]['messages'], { content, date, rec }] }]
      }
      doc.save();
    })

    return await ViewerModel.findOne({ email }).then((doc: unknown) => {

      const feedExist = doc.conversationFeed.filter((conversation: unknown) => {
        return (conversation.sender === sender && conversation.product === product)
      })
      console.log({ feedExist })
      const otherFeeds = doc.conversationFeed.filter((conversation: unknown) => {
        return (conversation.sender !== sender && conversation.product !== product)
      })
      console.log({ otherFeeds })

      if (feedExist.length > 0 && otherFeeds.length > 0) {

        doc.conversationFeed = [...otherFeeds, {
          product, sender, rep: email, messages:
            [...feedExist[0]['messages'], { content, date, rec }]
        }]
      }
      doc.conversationFeed = [...doc.conversationFeed, {
        product, sender, rep: email,
        messages: { content, date, rec }
      }]


      doc.save()
      return doc
    }).catch((error: unknown) => {
      if (error instanceof Error) {
        throw error
      } throw new Error(`${error}`)
    })



  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error
    } throw new Error(`${error}`)

  }
}
const deleteConversationFeed = async (
  _: undefined,
  { input }: { input: DeleteConversationFeedInput },
  { ViewerModel, }:
    {
      ViewerModel: unknown,
    }): Promise<ViewerTypeData | undefined> => {
  try {
    const { sender, rec, product } = input;
    console.log({ input })
    return ViewerModel.findOne({ email: sender }).then((doc: unknown) => {
      const otherConversationFeed = doc.conversationFeed.filter((conversation: unknown) => {
        return (conversation.sender !== rec && conversation.product !== product)
      })
      doc.conversationFeed = [...otherConversationFeed]
      doc.save()
      return doc
    }).catch((error: unknown) => {
      throw error
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error
    } throw new Error(`${error}`)

  }
}

const removeToken = async (
  _: undefined,
  { token }: { token: string },
  { ViewerModel }: { ViewerModel: unknown }
): Promise<boolean> => {
  try {
    await ViewerModel.findOneAndRemove({ token: token });
    return true;
  } catch (error: unknown) {
    // console.error(error);
    throw error;
  }
};

const getQrCode = async (
  _: undefined,
  { url }: { url: string }): Promise<{ qrCodeUrl: string } | undefined> => {
  try {
    console.log({ url })
    const qrCodeUrl = await QRCode.toDataURL(url)
    console.log({ qrCodeUrl })
    return {
      qrCodeUrl
    }
  } catch (error: unknown) {

    throw error;
  }
};

const Viewer = {
  loginSlug: async (viewer: ViewerTypeData, _: undefined, { slug }: { slug: (arg: string) => string }): Promise<string | undefined> => {
    return slug(viewer.login)
  },
  hasWallet: (viewer: ViewerTypeData): boolean | undefined => {
    return viewer.stripe_account_id ? true : false
  }

}
// eslint-disable-next-line no-undef
module.exports = {
  DateTime: DateTimeResolver,
  Viewer,
  Query: {
    viewer,
    viewerById,
    viewers,
    getQrCode
  },
  Mutation: {
    sendMessageViewer,
    addConversationFeed,
    deleteConversationFeed,
    removeToken,
    registerEvent,
  },
};
