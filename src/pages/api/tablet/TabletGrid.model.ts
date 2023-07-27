import mongoose from 'mongoose';
export interface ITabletGrid {
  title: string;
  souraNb:string;
  grid: number;
  group: [number];
  description: string;
  arabName:string;
  souraName: string;
  
  author:string;
  tabletWords:[{
    word: string;
    comment: string;
    index: number;
    ayah: number;
    
  }]
  ayahs: [{
      text: string,
      numberInSurah: number,
      number: number,
      juz: number,
      soura: string,
      slice: string
    }]}
const Schema = mongoose.Schema;
export const tabletGridSchema = new Schema<ITabletGrid>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, ' You must give a title']
    },
    souraNb: String,
    arabName: String,
    souraName: String,
    description: String,
    grid: Number,
    group: [Number],
    tabletWords: [
      {
        word: String,
        comment: String,
        index: Number,
        ayah: Number
      }
    ],
    ayahs: [[
      {
        text: String,
        numberInSurah: Number,
        number: Number,
        juz: Number,
        souraName: String,
        slice: String
      }
    ]]
  },
  {
    timestamps: true
  }
);

tabletGridSchema.index({ title: 1 }, { unique: true });

export default mongoose.models.TabletGrid || mongoose.model<ITabletGrid>('TabletGrid', tabletGridSchema);
