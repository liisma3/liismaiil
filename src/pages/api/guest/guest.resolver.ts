import { DateTimeResolver } from 'graphql-scalars';
import { AddGuestInputTypeData, GuestTypeData, UpdateGuestInputTypeData } from './guest.types';
import { SendMessageInput, AddConversationFeedInput, DeleteConversationFeedInput } from '@/api/profile/profile.types'

const guests = async (
  _: undefined,
  __: undefined,
  { GuestModel }: { GuestModel }
): Promise<GuestTypeData[] | undefined> => {
  try {
    const Guests = await GuestModel.find({}).limit(50).lean().exec();
    return Guests
  } catch (error: unknown) {
    console.log({ error });
    throw new Error(error);
  }
};


export const guestByTokenAws = async (
  _: undefined,
  { token, email }: { token: string, email: string },
  { GuestModel, _lodash }: {
    GuestModel: unknown, _lodash: {
      find: (...args) => {
        flag: string;
        token: string; args
      }
    }
  }
): Promise<{ success: boolean, token?: string, flag?: string } | undefined> => {
  try {
    const Guest = await GuestModel.findOne({
      email: email
    })!.lean().exec();

    const guest = _lodash.find(Guest['guestpass'], gst => gst.token === token)
    if (guest) {
      return {
        success: true,
        token: guest.token,
        flag: guest.flag
      }
    }
    else {
      return {
        success: false
      }
    }
  } catch (error: unknown) {
    throw new Error(error);
  }
};

// mutations
const addGuest = async (_: undefined,
  { input }: { input: AddGuestInputTypeData },
  { GuestModel, hashPassword, }: {
    GuestModel: unknown,
    hashPassword: unknown
  }):
  Promise<GuestTypeData | undefined> => {
  try {
    const { token, password, flagAvatar, organisation } = input;

    const guestData = {
      token, password, flagAvatar,
      organisation
    };
    const existingGuest = await GuestModel.findOne({
      token
    }).lean().exec();
    if (!existingGuest) {
      const hashedPassword = await hashPassword(password)
      const newGuest = new GuestModel({
        ...guestData,
        password: hashedPassword
      });
      const savedGuest = await newGuest.save();

      if (savedGuest) {

        return savedGuest
      } else {
        throw new Error(`can not save the guest${guestData}`)
      }
    } else {
      return existingGuest
    }
  } catch (error: unknown) {

    throw new Error(error);
  }
}


const updateGuest = async (
  _: undefined,
  { input }: { input: UpdateGuestInputTypeData },
  { GuestModel, hashedPassword, slug, _lodash }): Promise<GuestTypeData | undefined> => {
  try {
    const { token, password,
      flagAvatar,
      organisation,
      instagram,
      cha3bi,
      tablets,
      cards,
      tabletsValid,
      cardsValid,
      walletId,
      productsPromoted,
      bookings,
      addressGeo, } = input
    console.log(input)
    const updatedData = {}
    if (password !== null && (typeof password !== 'undefined')) {
      updatedData['password'] = hashedPassword(password)
    }
    if (flagAvatar !== null && (typeof flagAvatar !== 'undefined')) {
      updatedData['flagAvatar'] = flagAvatar
    }
    if (organisation !== null && (typeof organisation !== 'undefined')) {
      updatedData['organisation'] = slug(organisation)
    }
    if (instagram !== null && (typeof instagram !== 'undefined')) {
      updatedData['instagram'] = instagram.trim()
    }
    if (cha3bi !== null && (typeof cha3bi !== 'undefined')) {
      updatedData['cha3bi'] = cha3bi
    }
    if (tablets !== null && (typeof tablets !== 'undefined')) {
      updatedData['tablets'] = _lodash.sortedUniq(tablets)
    }
    if (cards !== null && (typeof cards !== 'undefined')) {
      updatedData['cards'] = _lodash.sortedUniq(cards)
    }
    if (tabletsValid !== null && (typeof tabletsValid !== 'undefined')) {
      updatedData['tabletsValid'] = _lodash.sortedUniq(tabletsValid)
    } if (cardsValid !== null && (typeof cardsValid !== 'undefined')) {
      updatedData['cardsValid'] = _lodash.sortedUniq(cardsValid)
    }
    if (walletId !== null && (typeof walletId !== 'undefined')) {
      updatedData['walletId'] = walletId
    }
    if (productsPromoted !== null && (typeof productsPromoted !== 'undefined')) {
      updatedData['productsPromoted'] = _lodash.sortedUniq(productsPromoted)
    }
    if (bookings !== null && (typeof bookings !== 'undefined')) {
      updatedData['bookings'] = bookings
    } if (addressGeo !== null && (typeof addressGeo !== 'undefined')) {
      updatedData['addressGeo'] = addressGeo
    }


    try {
      const savedGuest = await GuestModel.findOneAndUpdate({ token }, updatedData, { new: true }).lean().exec();

      return savedGuest
    } catch (error: unknown) {
      throw new Error(error);
    }
  }
  catch (error: unknown) {
    // console.error(error);
    throw new Error(error);
  }
};
const removeGuest = async (
  _: undefined,
  { token }: { tokenl: string },
  { GuestModel }
): Promise<{ success: boolean } | undefined> => {
  try {
    await GuestModel.findOneAndRemove({ token });

    return { success: true };
  } catch (error: unknown) {
    // console.error(error);
    throw new Error(error);
  }
};

const sendMessageGuest = async (
  _: undefined,
  { input }: { input: SendMessageInput },
  { GuestModel, }:
    {
      GuestModel: unknown,
    }): Promise<GuestTypeData | undefined> => {
  try {
    const { sender, content, rec, product, date, token } = input;

    return GuestModel.findOne({ email: rec }).then((doc: unknown) => {
      doc.messages = [...doc.messages, { token, rec, product, sender, content, date }]
      console.log({ savedMessage: doc.messages })

      doc.save()
      return doc
    }).catch((error: unknown) => {
      throw new Error(error)
    })

  } catch (error: unknown) {
    throw new Error(error)

  }
}


// eslint-disable-next-line no-undef
module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    guests,
    guestByTokenAws,
  },
  Mutation: {
    addGuest,
    updateGuest,
    removeGuest,
    sendMessageGuest
  },
};
