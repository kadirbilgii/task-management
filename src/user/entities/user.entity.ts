import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  _id: false, 
  versionKey: false 
});

export interface User extends Document {
  id: string;
  name: string;
  email: string;
}
