
import mongoose from 'mongoose';
import { CardTypeData } from '../card/card.types';
import { TabletTypeData, TabletInput, ValidateTabletInput, 
  TabletTemplateTypeData, TabletTemplateInput, TabletGridsInput, 
  TabletGridsTypeData, AddTabletOutput, } from './tablet.types';
import { Firestore } from 'firebase-admin/firestore';

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
  soura: number,
  { TabletGridModel }: { TabletGridModel: unknown }
): Promise<TabletGridsTypeData[] | undefined> => {
  try {
    const tabletGrids = await TabletGridModel.findOne({ souraNb: soura }).lean().exec();
    return tabletGrids;
  } catch (error) {

    throw error;
  }
};
export const getTabletTemplates = async (
  _: undefined,
  __: undefined,
  { TabletTemplateModel }: { TabletTemplateModel: any }
): Promise<TabletTemplateTypeData[] | undefined> => {
  try {
    const tabletTemplates = await TabletTemplateModel.find().lean().exec();
    console.log({tabletTemplates})
    return tabletTemplates;
  } catch (error) {

    throw error;
  }
};
export const getTemplateBySoura = async (
  _: undefined,
  { soura }: { soura: string },
  { TabletTemplateModel }: { TabletTemplateModel: unknown }
): Promise<TabletTemplateTypeData[] | undefined> => {
  console.log({ soura })
  try {
    const template = await TabletTemplateModel.find({ souraName: `${soura}` }).lean().exec();
    console.log({ template })
    return [...template];
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
): Promise< {
  guests: number,
  time: number,
  suggestions: [string],
  coll: [string],
  soura: string
}| undefined> => {
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
// ADD TO FIRESTORE AUTHOR
const addGridOnFireStore =  async (
  _: undefined,
  { uid,grid_title }: {uid:string,grid_title:string  },
  { dbFirestore }: {  dbFirestore:Firestore }
): Promise<boolean | undefined> => {
  try {
    const dbProfiles = dbFirestore.collection('profiles');
           const profileRef = await dbProfiles.doc(`${uid}`);
      const profileSnapshot = await profileRef.get()
 
          if (profileSnapshot?.exists) {
            await profileRef.collection('grids').doc(grid_title)
            return  true
          } else {
            return  false
          }
        }
        catch (error: unknown) {
            throw error;
      };
    
}
// MUTATIONS
export const addTabletGrids = async (
  _: undefined,
  { input }: { input: TabletGridsInput },
  { TabletGridsModel, dbFirestore }: { TabletGridsModel: any, dbFirestore:Firestore }
): Promise<AddTabletOutput | undefined> => {
  const { title, description, arabName, souraName, souraNb, tabletWords=[],
    uid,ayahs, grid, group } = input;
  console.log({ input })
  try {
    const oldGrid = await TabletGridsModel.find({ author:uid }).lean().exec()

    if (oldGrid.length === 1 && oldGrid[0]['title'] === title) {
      oldGrid.description=description
      oldGrid.ayahs = ayahs
      oldGrid.tableWords = [...oldGrid.tableWords,tabletWords]
      oldGrid.grid = grid
      oldGrid.group = group 
      oldGrid.ayahs = ayahs
      await oldGrid.save()
     const res = await addGridOnFireStore(_,{uid,grid_title:title}, {dbFirestore})
     if(res) {
      return {success:true, message:`Same Title found,${title} we update the tablet`}
    }else {
      return {success:false, message:`Same Title found updated on database , can not add reference to profile `}
    }
    } else {
      const tabletGrids = new TabletGridsModel({ author:uid, title, description, 
        arabName, souraName, souraNb, tabletWords, ayahs, grid,group });
        await tabletGrids.save();
     const res = await addGridOnFireStore(_,{uid,grid_title:title}, {dbFirestore})
        if(res) {
          return {success:true, message:`${title} added to tablet and profile`}
        }else {
          return {success:false, message:`${title} added to tablet database, 
          but can not add a reference to the profile`}
        }
      }
  } catch (error: unknown) {
    throw error
  }
};
export const addTablet = async (
  _: undefined,
  { input }: { input: AddTabletInput },
  { TabletGridsModel }: { TabletGridsModel: any }
): Promise<TabletGridsTypeData | undefined> => {
  const { title, description, arabName, souraName, souraNb, wordsComment, ayahsGrids, grid, createdAt } = input;
  console.log({ input })
  try {
    const oldGrid = await TabletGridsModel.find({ title }).lean().exec()

    if (oldGrid.length === 1 && oldGrid[0]['title'] === title) {
      return oldGrid as TabletGridsTypeData
    } else {
      const tabletGrids = new TabletGridsModel({ title, description, arabName, souraName, souraNb, wordsComment, ayahsGrids, grid, createdAt });
      const tabletGridsSaved = await tabletGrids.save();

      return tabletGridsSaved;
    }
  } catch (error: unknown) {
    throw error
  }
};
const registerOnFireStore =  async (
  _: undefined,
  { input }: { input: TabletTemplateInput },
  { dbFirestore }: {  dbFirestore: Firestore }
): Promise<{success: boolean, message:string} | undefined> => {
  const { souraNb, souraName, description, arabName, ayahs, uid } = input;
  console.log({ souraNb, souraName, description, arabName, ayahs })
  try {
    const dbProfiles = dbFirestore.collection('profiles');
           const profileRef = await dbProfiles.doc(`${uid}`);
      const profileSnapshot = await profileRef.get()
 
          if (profileSnapshot?.exists) {
            await profileRef.collection('templates').doc(`${souraNb}-${souraName}`).set({ 
              souraNb, souraName, description, arabName, ayahs });
            return {
              success: true,
              message: 'OK'
            }
          } else {
            return {
              success: true,
              message: 'NO profile found'
            }
          }
        }
        catch (error: unknown) {
          
          throw error;

        };
    
}
export const addTabletTemplate = async (
  _: undefined,
  { input }: { input: TabletTemplateInput },
  { TabletTemplateModel, dbFirestore }: { TabletTemplateModel:any, dbFirestore: Firestore }
): Promise<AddTabletOutput | undefined> => {
  const { souraNb, souraName, description, arabName, ayahs, uid } = input;
  console.log({ souraNb, souraName, description, arabName, ayahs })
  try {
    const tablet = new TabletTemplateModel({ author: uid, souraNb, souraName, description, arabName, ayahs });
    await tablet.save();
   return await registerOnFireStore(_,{input},{dbFirestore})
}catch (error: unknown) {
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

const removeAllTemplate = async (
  _: undefined,
  __: undefined,
  { TabletTemplateModel }: { TabletTemplateModel: unknown }
): Promise<{ success: boolean }> => {
  try {
    console.log('removeAllTemplate')
    await TabletTemplateModel.deleteMany({})

    return { success: true };
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
    getTemplateBySoura,
    getTabletTemplates,
    getTabletsByWord,
    getStats,
  },
  Mutation: {
    addTablet,
    addTabletGrids,
    addTabletTemplate,
    updateTablet,
    validateTablet,
    removeTablet,
    removeAllTemplate,
    createSourasSections
  },
};
