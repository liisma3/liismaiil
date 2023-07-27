import { Collection } from 'mongodb';
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
  englishName: string;
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
