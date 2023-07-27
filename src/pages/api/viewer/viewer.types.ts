
import { ProductTypeData, ImageType } from '@/api/product/product.types';

import { FeedTypeData, MessageTypeData, } from '@/api/guest/guest.types'

export type ViewerTypeData = {
  _id: string;
  login: string;
  email: string;
  password?: string;
  stripe_account_id?: string;
  phone?: string;
  bio?: string;
  avatar?: ImageType;
  flagAvatar?: string,
  organisation?: string
  status: ViewerTypeRole;
  website?: string;
  liisCategories?: string[];
  orders?: [OrderType];
  messages?: [MessageTypeData];
  events?: [EventTypeData];
  conversationFeed?: [FeedTypeData]
  instagram?: string;
  emailListing?: string[];
  liism?: number;
  walletId?: string;
  token?: string;
  productsPromoted?: string[];
  refreshTokenExpiration?: string;
  selections?: string[];
  products?: ProductTypeData[];
  discountProducts?: DiscountProductType[];
  sales?: number;
  guestpass?: GuestPassType[];
  collaboratorpass?: LiisPassType[];
  hundreddiscountspass?: LiisPassType[];
  guestProfiles?: [ConnexionProfileType]
  discountProfiles?: [ConnexionProfileType]
  liismanagerProfiles?: [ConnexionProfileType]
  collaboratorProfiles: [ConnexionProfileType]
  organisatorProfiles: [ConnexionProfileType]
  bookings?: BookingType[];
  coords?: { long: number, lat: number };
  addressGeo?: string;
  country?: string;
  updatedAt?: string;
  createdAt?: string;
};
export type CollaboratorTypeData = {
  _id: string
  login: string;
  email: string;
  phone: string;
  instagram: string;
  website: string;
  avatar: string;
  coords: {
    lat: string;
    long: string;
  },
  addressGeo: string;
  bio: string;
  stripe_account_id?: string;

  status: ViewerTypeRole;
  organisation: [string];
  updatedAt?: string;
  createdAt?: string;
}

export type AffiliateRequestType = {
  email: string;
  id: string;
}

export type ConnexionProfileType = {
  title: string;
  emailCollaborator: string;
  token?: string;
  profileEmail: string;
  profileId: string;
  price?: number;
  flag?: string;
  startDate: string;
  status: ViewerTypeRole;
}

export type AddConnectionTypeInput = {
  title: string;
  emailCollaborator: string;
  profileEmail: string;
  profileId: string;
  price: number;
  startDate: string;
  status: ViewerTypeRole;
}
export type AddAffiliateInput = {
  title: string;
  emailCollaborator: string;
  emailProfile: string;
  profileId: string;
  status: ViewerTypeRole;
}

export type DiscountProductType = {
  title: string;
  stock: number;
}
export type LiisPassType = {
  pass: string;
  flag: string
}
export type GuestPassType = {
  pass: string;
  flag: string;
  cha3bi: number;
  cards: [string];
  tablets: [string]
}

export type EnrollmentInput = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: ImageType;
  enrollmentStatus: string[];
  max: number;
  startDate: string;
  endDate: string;


}
export type EnrollmentType = {
  title: string;
  description: string;
  price: string;
  image: ImageType;
  max: number;
  startDate: string;
  endDate: string;
}
export type EventTypeData = {
  title: string;
  titleSlug: string;
  content: string;
  allDay: boolean;
  start: string;
  end: string;
  status: ViewerTypeRole;
  contact: string;
  avatar: string;
}
export type RegisterEventInput = {
  email: string;
  events: [EventTypeData];
}

export type RemoveEnrollmentInput = {
  id: string;
  title: string[];
}

export type CardBackInput = {
  id: string;
  card: number;
}
export type GetDiscountInput = {
  affiliator: string;
  discountToken: string;
}
export type BookingType = {
  bookingStartDate: string;
  bookingEndDate: string;
}
export type OrderType = {
  products: string[];
  quantity: number;
  profile: string;
  total: number;
};

export type BookingTypeData = {
  bookingStartDate: string;
  bookingEndDate: string;
};

export type AddViewerInput = {
  login: string;
  email: string;
  phone?: string;
  uid?: string;

  status: ViewerTypeRole;
  name: string;
  destination: string;
  building: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  contact: string;
  isdefault: boolean;
};

export type AddViewerOutput = {
  _id: string;
  login: string;
  username?: string;
  email: string;
  status: ViewerTypeRole;
  token: string;
  address: Address
};
export type SigninViewerInput = {
  email: string
  password: string
}
export type UpdateViewerInput = {
  login: string;
  email: string;
  bio: string;
  phone?: string;
  role?: [string];
  organisation?: string;
  website?: string;
  instagram?: string;
  avatar: { public_id: string, url: string }
};
export type UpdateViewerStatusInput = {
  email: string;

  status: string
};
export type UpdateViewerStatusOutput = {
  success: boolean;

  status: ViewerTypeRole;
};
export interface ConnectionCardProps {
  token: string;
  title: string;
  profileEmail: string;
  profileId: string;
  price: number;
  flag: string;
  startDate: string;
  status: ViewerTypeRole;
}

export type RemoveViewerInput = {
  email: string;
};
export type Address = {
  name: string;
  destination: string;
  building: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  contact: string | number;
  isdefault: boolean;
};
export type AddressInput = {
  id: string;
  name: string;
  destination: string;
  building: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  contact: string | number;
  isdefault: boolean;
};

export type UpdateViewerAddressInput = {
  email: string;
  coords: { long: number, lat: number };
  addressGeo: string;

};
export type ConnectPayoutInput = {
  email: string;
  id: string;
}
export type StudsType = {
  flag: string;
  pass: string;
}
export enum ViewerTypeRole {
  USER = "USER",
  ADMIN = 'ADMIN',
  COLL = 'COLL',
  LIIS = 'LIIS',
  ORGA = 'ORGA',
  GUEST = 'GUEST',
}
export enum TypeLevel {
  SOBH = 'SOBH',
  DOHR = 'DOHR',
  ASR = 'ASR',
  MAGH = 'MAGH',
  ICHA = 'ICHA'
}
