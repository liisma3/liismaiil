
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
export type TabletTypeData = {
  title: string;
  description: string;
  souraNb: number;
  arabName: string;
  souraName: string;
  wordsComment?: [WordsCommentType]
  ayahs: [TabletAyahType]
  createdAt?: string;
  updatedAt?: string;
};
export type TabletGridsTypeData = {
  title: string;
  description: string;
  grid: number;
  souraNb: number;
  arabName: string;
  souraName: string;
  wordsComment?: [WordsCommentType]
  ayahsGrids: [TabletAyahType]
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
