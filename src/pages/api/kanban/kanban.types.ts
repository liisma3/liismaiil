import { ImageType } from "../selection/selection.types";
import { TabletTypeData } from "../tablet/tablet.types";

export type KanbanStateProps = {
 title: string;
  description: string;
  author: string;
  selectedTablet: string;
  selectedStage:string;
  selectedStory:string;
  stages: KanbanStage[];
  
  video: [string];
  videoLink: [string];
  pdf: [string];

}
export type KanbanStage = {
  id: string;
  title: string;
  stories?: KanbanStory[];
};

export type KanbanStory = {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  attachments?: ImageType[];
  guests?: KanbanGuest[];
  kanbanTablets?: TabletTypeData[];
  comments?: KanbanComment[];
}
export type KanbanComment = {
  id: string;
  comment: string;
  token: string;
};
export  type AddKanbanTabletType = {
  stageId:string,
   storyId:string,
   tablet:TabletTypeData
}


export type KanbanInput = {
  id: string;
  author: string;
  title: string;
  description: string;
}
export type SendTelegramStageInput ={
  title:string;
  soura:string;
  tablets:number;
  cards:number
}

export type KanbanGuest = {
  token: string;
  name: string;
  flag: string;
  time: string;
};

export enum PRIORITY {
  LOW = 'LOW',
  HEIGH = 'HEIGH',
  MEDIUM = 'MEDIUM'
}


export type StoryInput = {
  id: number;
  title: string;
  description: string;
  author: string;
  stageId: number;
  priority: PRIORITY.LOW,
  dueDate: string;
  attachments: [ImageType];
  commentIds: string;
  tabletIds: [string];
};
export type UpdateStoryInput = {
  title: string;
  description: string;
  video: string;
  videoLink: string;
  pdf: string;
}
export type RemoveStoryInput = {
  title: string;
  video?: string;
  videoLink?: string;
  pdf?: string;
}

export type PromoteStoryInput = {
  title: string;
  review: string;
  profileId: string;
}



