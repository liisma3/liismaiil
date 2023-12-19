import { StoryInput, StoryTypeData, PromoteStoryInput, UpdateStoryInput, UpdateStorytInput, KanbanStateProps, KanbanInput, SendTelegramStageInput } from './kanban.types';




const storiesByEmail = async (
  _: undefined,
  { email }: { email: string },
  { KanbanModel }: { KanbanModel: unknown }
): Promise<Array<StoryTypeData> | null> => {
  try {
    const stories = await KanbanModel.find({
      author: email
    }).lean().exec();
    console.log({ stories })
    return stories

  } catch (error) {
    console.log({ error });
    return Promise.reject(error);
  }
};

const viewerKanban = async (
  _: undefined,
  { email }: { email: string },
  { KanbanModel }: { KanbanModel: unknown }
): Promise<Array<KanbanStateProps> | null> => {
  try {
    const viewerKan = await KanbanModel.findOne({ email }).lean().exec();
    return viewerKan

  } catch (error: unknown) {
    throw error;
  }
}


const story = async (
  _: undefined,
  { titleSlug }: { titleSlug: string },
  { KanbanModel }: { KanbanModel: unknown }
): Promise<Array<StoryTypeData> | null> => {
  try {
    const stories = await KanbanModel.findOne({
      titleSlug
    }).lean().exec();
    return stories

  } catch (error: unknown) {
    throw error;
  }
}

// Mutations

const addStory = async (
  _: undefined,
  { input }: { input: StoryInput },
  { KanbanModel, mongoose }: { KanbanModel: unknown; mongoose: any }
): Promise<StoryTypeData[] | undefined> => {
  try {
    const { title, description, author, stageId, commentIds, dueDate, id, priority, tabletIds } = input;

    try {
      const existingKanban = await KanbanModel.findOne({ email: author }).exec();

      if (existingKanban) {
        existingKanban.stories = [...existingKanban.stories, {
          title, description, author, stageId, commentIds, dueDate, id, priority, tabletIds, createdAt
        }]
        existingKanban.save()
        return [...existingKanban?.stories,
        {
          title, description, author, stageId, commentIds, dueDate, id, priority, tabletIds,

        }]

      } else {
        const newKanban = new KanbanModel({

          author, title, description,
          stages: [{
            id: 0,
            title,
            itemIds: [id]
          }], comments: [{ id: 0 }],
          stories: [{
            title, description, author, stageId, commentIds, dueDate,
            id, priority, tabletIds
          }]
        })
        await newKanban.save();
        return newKanban.stories
      }
    }
    catch (error: unknown) {
      throw error;
    }
  } catch (error: unknown) {
    throw error;
  }
}
const addKanban = async (
  _: undefined,
  { input }: { input: KanbanInput },
  { KanbanModel, slug }: { KanbanModel: unknown; slug: (arg: string) => string }
): Promise<StoryTypeData | undefined> => {
  try {
    const { title, description, author, id, } = input;
    const titleSlug = slug(title);
    const createdAt = new Date().toISOString();
    try {
      const existingKan = await KanbanModel.findOne({ email: author }).lean().exec();

      if (existingKan) {

        return { ...existingKan, _id: existingKan._id }
      } else {
        const newKan = new KanbanModel({
          title, description, author,
          id, createdAt
        })
        await newKan.save();
        return newKan
      }
    }
    catch (error: unknown) {
      throw error;
    }
  } catch (error: unknown) {
    throw error;
  }
}


// UPDATE PRODUCT
const updateStory = async (
  _: undefined,
  { input }: { input: UpdateStoryInput },
  { KanbanModel }: { KanbanModel: unknown }
): Promise<StoryTypeData | null> => {
  try {
    const { title, description, pdf, video, videoLink } = input
    const story = await KanbanModel.findOne({
      titleSlug: title
    }).lean().exec();
    if (story) {
      if (description !== null && (typeof description !== 'undefined')) {
        story.description = description?.trim()
      }
      if (pdf !== null && (typeof pdf !== 'undefined')) {
        story.pdf = pdf?.trim()
      }
      if (videoLink !== null && (typeof videoLink !== 'undefined')) {
        story.videoLink = videoLink?.trim()
      }
      if (video !== null && (typeof video !== 'undefined')) {
        story.video = video?.trim()
      }
      try {
        await story.save()
        const updatedStory = await KanbanModel.findOne({ titleSlug: title }).lean().exec()

        return updatedStory
      } catch (error: unknown) {
        throw error;
      }

    } else {
      throw new Error('cant save the modifications')

    }
  } catch (error) {
    throw new Error(error)

  };
}
//
// UPDATE PRODUCT
const promoteStory = async (
  _: undefined,
  { input }: { input: PromoteStoryInput },
  { KanbanModel }: { KanbanModel: unknown }
): Promise<{ success: boolean } | null> => {
  const { title, review, profileId } = input

  try {
    return await KanbanModel.findOneAndUpdate({ titleSlug: title },
      { $addToSet: { reviews: { profileId, review } } },
      function (err, result) {
        if (err) {
          throw new Error(err);

        } else {

          console.log(result)
          return { success: true }
        }
      })
  } catch (error) {
    throw new Error(error)

  };
};
const removeStory = async (
  _: undefined,
  { input }: { input: RemoveStoryInput },
  { KanbanModel, S3Client, DeleteObjectCommand }: { KanbanModel: unknown, S3Client: unknown, DeleteObjectCommand: unknown }): Promise<{ success: boolean } | undefined> => {
  const { title, video, pdf } = input
  try {

    await KanbanModel.findOneAndRemove({ titleSlug: title });
    // remove video

    const s3Client = new S3Client({ region: 'eu-central-1' });
    if (pdf !== '') {
      const params = {
        Bucket: "lami1a-story-pdfs", // The name of the bucket. For example, 'sample_bucket_101'.
        Key: `${pdf}`,//path.basename(fileStream) The name of the object. For example, 'sample_upload.txt'.
      };
      try {
        const data = await s3Client.send(new DeleteObjectCommand(params));
        console.log("Success. Object deleted.", data);
        return data; // For unit tests.
      } catch (err) {
        console.log("Error", err);
      }
      return { success: true }
    } if (video !== '') {
      const params = {
        Bucket: "lami1a-story-videos", // The name of the bucket. For example, 'sample_bucket_101'.
        Key: `${video}`,//path.basename(fileStream) The name of the object. For example, 'sample_upload.txt'.
      };
      try {
        const data = await s3Client.send(new DeleteObjectCommand(params));
        console.log("Success. Object deleted.", data);
        return data; // For unit tests.
      } catch (err) {
        console.log("Error", err);
      }
      return { success: true }
    }
  } catch (error: unknown) {
    console.log({ error })
    return { success: false }
  }
};
const sendTelegramStage = async (
  _: undefined,
  { input }: { input: SendTelegramStageInput },
  { bot }: { bot:unknown }
): Promise<{ success: boolean, message:string } | undefined> => {
  try {
    const {title,tablets,soura,cards } = input
   console.log({bot})
   process.on('uncaughtException', function (err) {
    console.log(err);
}); 
/* try {
  bot?.command('echo', async (ctx, next) => {
    try {
      const input = ctx.message.text;
      const inputArray = input.split(' ');
      console.log({ inputArray });
      if (inputArray[1].startsWith('a')) {
        ctx.reply('y have a qq chose');
        next(ctx);
      }
    } catch (error) {
      console.log({ error });
    }
    // Explicit usage
  });

  bot?.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);

    // Using context shortcut
    await ctx.leaveChat();
  });

  bot?.on('callback_query', async (ctx) => {
    // Explicit usage
    await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

    // Using context shortcut
    await ctx.answerCbQuery();
  });

  bot?.on('inline_query', async (ctx) => {
    const result = [];
    // Explicit usage
    await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

    // Using context shortcut
    await ctx.answerInlineQuery(result);
  });

} catch (error) {
  throw new Error(error)
} */
    try {
      
      bot?.launch();
    } catch (error) {
      throw new Error(error)
      
    }
    
    return  {success: true, message:'document and database mention was deleted '} ;
  } catch (error: unknown) {
    throw new Error(error);

  }
};


const KanbanResolver = {

  Query: {
    viewerKanban,
    storiesByEmail,
    story,

  },
  Mutation: {
    addStory,
    addKanban,
    updateStory,
    promoteStory,
    removeStory,
    sendTelegramStage,
  },
};
export default KanbanResolver;
