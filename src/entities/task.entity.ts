import { Schema, Document } from 'mongoose';

export const TaskSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
}, {
  _id: false,
  versionKey: false
});

export interface Task extends Document {
  id: string;
  title: string;
  description?: string;
  status: string;
}
