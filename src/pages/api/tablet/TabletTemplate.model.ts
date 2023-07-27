import mongoose from 'mongoose';
export interface ITabletTemplate {
  id: string;
  souraNb:string;
  souraName: string;
  description: string;
  arabName:string;
  author:string;
  ayahs:[{
    text: string;
    numberInSurah: number;
    number: number;
    juz: number;
    souraName: String;
  }]

  templateWords:[{
    text:string;
    number:number;
    comment:string;
  }];
  
}
const Schema = mongoose.Schema;

export const tabletTemplateSchema = new Schema<ITabletTemplate>(
  {
    souraNb: {
      type: String,
      trim: true,
      required: true
    },
    souraName: {
      type: String,
      trim: true,
      required: [true, ' You must have template soura name']
    },
    
    description: String,
    arabName: String,
    author:String,
    ayahs: [{
        text: String,
        numberInSurah: Number,
        number: Number,
        juz: Number,
        souraName: String,
        slice: String
      }],
    templateWords:[{
      text:String,
      number:Number,
      comment:String,
    }]
  },
  {
    timestamps: true
  }
);



export default mongoose.models.TabletTemplate || mongoose.model<ITabletTemplate>('TabletTemplate', tabletTemplateSchema);
