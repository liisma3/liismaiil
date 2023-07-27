import { Collection } from 'mongodb';

export enum ProgressStatus {
  SOBH,
  DOHR,
  ASR,
  MAGH,
  ICHA
}
export enum TabletStatus {
  SOBH,
  DOHR,
  ASR,
  MAGH,
  ICHA
}
export interface IAyah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  slice?: string
}

export interface IAyahSoura {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  idSoura: number;
  name: string;
}

export interface ISoura {
  _id: number;
  ayahs: [IAyah];
  englishName: string;
  name: string;
}

export interface Database {
  souar: Collection<ISoura>;
}

export type TabletTemplateTypeData = {
  id?: string;
  title?: string;
  souraNb: number;
  souraName: string;
  arabName: string;
  description?: string;
  ayahs: TabletAyahType[];
  group?: number;
  createdAt?: string;
  tabletWords?: [TabletWord];
};

export type TabletTemplateInput = {
  uid:string,
  souraNb: string;
  souraName: string;
  description: string;
  arabName: string;
  ayahs: TabletAyahType[];
  
};

export type TabletTypeData = {
  id: string;
  title: string;
  description: string;
  arabeName: string;
  soura: string;
  souraNumber: number;
  tabletWords?: TabletWord[];
  ayahs: TabletAyahType[];
  createdAt?: string;
  updatedAt?: string;
};
export type TabletGridsTypeData = {
  id?:string;
  title: string;
  description: string;
  souraNb: number;
  arabName: string;
  souraName: string;
  tabletWords?: [WordsCommentType]
  ayahs: [[TabletAyahType]]
  createdAt?: string;
  updatedAt?: string;
};
export type TabletGridsInput = {
  uid:string;
  title: string;
  description: string;
  souraNb: number;
  arabName: string;
  souraName: string;
  tabletWords?: [WordsCommentType];
  grid: number;
  group:[number];
  ayahs: [TabletAyahType][];
  createdAt?: string;
  updatedAt?: string;
};

export type TabletAyahType = {
  text: string;
  numberInSurah: number;
  number: number;
  juz: number;
  souraName: string;
  slice?: string;
}

export type WordsCommentType = {
  word: string;
  comment: string;
  index: number;
  ayah: number;
  lang:string;
};

export type AddTabletOutput = {
  success: boolean;
  message: string
}
export type WordSelectedType = {
  word: string;
  ayah: number;
  index: number;
  soura?: string
};
export type CharSelectedType = {
  char: string;
  ayah: number;
  index: number;
  soura?: string
};
export type TabletSouraType = {
  souraName: string, souraArabName: string,
  ayahs: TabletAyahType[], _id: number
}



export type TabletWord = {
  text: string;
  index: number;
  comment?:string
};


export type ValidateTabletInput = {
  id: string;
  idProfile: string;
};
export type TabletInput = {
  id: string;
  title: string;
  description: string;
  arabeName: string;
  soura: string;
  souraNumber: number;
  tabletWords: [TabletWord];
  ayahs: [TabletAyahType]
};

export type StatsTypeData = {
  guests: number;
  time: number;
  suggestions: [string];
  coll: [string];
  soura: string;
}


export type TabletComment = {
  id: string;
  comment: string;
  profileId: string;
};
