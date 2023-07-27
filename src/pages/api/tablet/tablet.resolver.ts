
import mongoose from 'mongoose';
import { CardTypeData } from '../card/card.types';
import { TabletTypeData, TabletInput, ValidateTabletInput, StatTypeData, TabletGridsTypeData, } from './tablet.types';
import { ISoura } from '@/api/coran/coran.types'
export const tablets = async (
  _: undefined,
  __: undefined,
  { TabletModel }: { TabletModel: unknown }
): Promise<TabletTypeData[] | undefined> => {
  try {
    let results;
    results = await TabletModel.find({})
      .lean()
      .exec();

    return results
  } catch (error: unknown) {
    console.log({ error });
  }
};

/*  try {
   const { limit, page } = input;
   let results;
   if (page > 0) {
     results = await TabletModel.find({})
     .skip((page - 1) * limit)
   .lean()
   .exec();
} else {
 results = await TabletModel.find({}).limit(limit).lean().exec();
} 
 *  fs.writeFile(path.join(`selection.json`), JSON.stringify(selections), async (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          const allFile = await fs.readFileSync(`selection.json`, "utf8");
          console.log(JSON.parse(allFile))
        }
      });
 */
export const getTabletsBySoura = async (
  _: undefined,
  soura: string,
  { TabletModel }: { TabletModel: unknown }
): Promise<TabletTypeData | undefined> => {
  try {
    const tablet = await TabletModel.findOne({ soura: soura }).lean().exec();
    return tablet;
  } catch (error) {

    throw error;
  }
};
export const getTabletsByWord = async (
  _: undefined,
  word: string,
  { TabletModel }: { TabletModel: unknown }
): Promise<TabletTypeData | undefined> => {
  try {
    const tablet = await TabletModel.findOne({ tabletWords: word }).lean().exec();
    return tablet;
  } catch (error) {

    throw error;
  }
};
export const getStats = async (
  _: undefined,
  id: string,
  { TabletModel }: { TabletModel: unknown }
): Promise<StatTypeData | undefined> => {
  try {
    const tablet = await TabletModel.findOne({ id }).lean().exec();
    if (tablet) {
      return {
        guests: 0,
        time: 0,
        suggestions: [''],
        coll: [''],
        soura: ''
      }
    } else {
      throw ('the tablet don t exits')
    }
  }
  catch (error) {
    throw error;
  }
};
// MUTATIONS
export const addTablet = async (
  _: undefined,
  { input }: { input: TabletGridsTypeData },
  { TabletModel }: { TabletModel: unknown }
): Promise<TabletGridsTypeData | undefined> => {
  const { title, description, arabName, souraName, souraNb, wordsComment, ayahsGrids, grid, createdAt } = input;
  try {
    const tablet = new TabletModel({ title, description, arabName, souraName, souraNb, wordsComment, ayahsGrids, grid, createdAt });
    const tableted = await tablet.save();
    return tableted;
  } catch (error: unknown) {
    throw error
  }
};



export const updateTablet = async (_: undefined, input: TabletInput, { TabletModel }: { TabletModel: unknown })
  : Promise<TabletTypeData | undefined> => {
  try {
    const { id, title, description, arabeName, soura, souraNumber, tabletWords, ayahs } = input;
    const tablet = await TabletModel.findOneAndUpdate({ id: id }, { title, description, arabeName, soura, souraNumber, tabletWords, ayahs }, { new: true });
    return tablet;
  } catch (error: unknown) {
    throw error
  }
};
//dbFirestore }: { dbFirestore: unknown 
export const validateTablet = async (
  _: undefined,
  input: ValidateTabletInput,
  { TabletModel, dbFirestore, FieldValue }: { dbFirestore: unknown; TabletModel: unknown; FieldValue: () => {} }
): Promise<TabletTypeData | undefined> => {
  try {
    const { id, idProfile } = input
    const tablet = await TabletModel.findOne({ id: id }).lean().exec()
    if (tablet) {
      const dbProfiles = dbFirestore.collection('profiles');

      const profileRef = await dbProfiles.doc(`${idProfile}`);
      profileRef.update({
        tabletsValidated: FieldValue!.arrayUnion(`{id}`)
      });
      return tablet
    } else throw ('the tablet don t exists')

  } catch (error: unknown) {
    // console.error(error);
    throw error
  }
};

const removeTablet = async (
  _: undefined,
  { id }: { id: string },
  { TabletModel }: { TabletModel: unknown }
): Promise<boolean> => {
  try {
    await TabletModel.findOneAndRemove({ id });

    return true;
  } catch (error: unknown) {
    throw error;
  }
};

type SectionSourasType =
  {
    section: string;
    names: [
      {
        souraName: string;
        souraNb: number;
      }
    ];
  }

const createSourasSections = async (
  _: undefined,
  { input }: {
    input: SectionSourasType
  },
  { createSourasSectionsFile }: { createSourasSectionsFile: () => {} }
): Promise<{ success: boolean } | undefined> => {
  try {

    await createSourasSectionsFile(input)

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {

      throw error
    } throw new Error(`${error}`)

  }
};

module.exports = {

  Query: {
    tablets,
    getTabletsBySoura,
    getTabletsByWord,
    getStats,
  },
  Mutation: {
    addTablet,
    updateTablet,
    validateTablet,
    removeTablet,
    createSourasSections
  },
};
