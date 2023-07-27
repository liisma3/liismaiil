
import { ViewerTypeData } from '@/api/viewer/viewer.types';
import { SelectionTypeData } from '@/api/selection/selection.types';
import { CardTypeData } from '../card/card.types';
import { TabletTypeData } from '../tablet/tablet.types';
import { MessageTypeData } from '../guest/guest.types';


export type CreateDomainInput = {
  title: string;
  image: string;
  city: string;
  country: string;
  zip: string;
  selections: SelectionTypeData[];
  rewards: string[];
};

export type UpdateDomainInput = {
  titleSlug: string;
  title: string;
  image: string;
  city: string;
  country: string;
  zip: string;
  selections: Selection[];
  rewards: string[];
};
export type AddViewerInput = {
  titleSlug: string;
  login: string;
};
export type AddMessageInput = {

  input: MessageTypeData;
};

export type DomainTypeData = {
  _id: string;
  title: string;
  titleSlug: string;
  viewers: ViewerTypeData[];
  image: string;
  city: string;
  country: string;
  zip: string;
  cards: CardTypeData[];
  tablets: TabletTypeData[];
  rewards: string[];
  messages: MessageTypeData[];
  authorized?: boolean;
};

export type DomainType = {
  domain: DomainTypeData;
};
export type DomainsType = {
  domains: DomainTypeData[];
};
