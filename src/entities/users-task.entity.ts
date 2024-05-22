import { Schema, Document } from 'mongoose';

export const UsersTaskSchema = new Schema({
  _id: { type: String, required: true },
  userId: { type: String, required: true },
  taskId: { type: String, required: true },
}, {
  _id: false,
  versionKey: false
});

export interface UsersTask extends Document {
  id: string;
  userId: string;
  taskId: string;
}
