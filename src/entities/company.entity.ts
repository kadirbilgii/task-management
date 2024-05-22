import { Schema, Document } from 'mongoose';

export const CompanySchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true, unique: true },
}, {
  _id: false,
  versionKey: false
});

export interface Company extends Document {
  id: string;
  name: string;
}
