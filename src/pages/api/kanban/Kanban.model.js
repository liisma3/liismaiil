import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const kanbanSchema = Schema(
  {
    _id: String,
    title: {
      type: String
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    author: {
      type: String,
      trim: true,
      required: true
    },

    stages: [
      {
        id: Number,
        title: String,
        stories: [
          {
            id: Number,
            title: String,
            description: String,
            dueDate: String,
            priority: String,
            attachments: [
              {
                public_id: String,
                url: String
              }
            ],
            guests: [ String],
            kanbanTablets: [
              {
                id: String,
                title: String,
                description: String,
                stageId: Number,
                dueDate: String,
                tablets: [{ type: Schema.Types.ObjectId, ref: 'Tablets' }],
                comments: [
                  {
                    id: Number,
                    comment: String,
                    token: String
                  }
                ]
              }
            ],
            comments: [
              {
                id: Number,
                comment: String,
                token: String
              }
            ]
          }
        ],
        video: [String],
        videoLink: [String],
        pdf: [String]
      }
    ]
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true
  }
);

export default mongoose.models ? mongoose.models.Lesson || mongoose.model('Kanban', kanbanSchema) : mongoose.model('Lesson', lessonSchema);
