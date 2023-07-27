import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const tabletSchema = Schema(
  {
  
    title: {
      type: String,
      trim: true,
      required: [true, " You must give a title"],
    },

    description: String,
    grid: Number,
    souraNb: Number,
    arabName: String,
    souraName: String,
    wordsComment: [
      {
        word: String,
        comment: String,
        index: Number,
        ayah: Number,
      },
    ],
    ayahsGrids: [
      {
        text: String,
        numberInSurah: Number,
        number: Number,
        juz: Number,
        soura: String,
        slice: String,
      },
    ],
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true,
  }
);

tabletSchema.index({ id: 1 }, { unique: true });

export default mongoose.models.Tablet || mongoose.model("Tablet", tabletSchema);
