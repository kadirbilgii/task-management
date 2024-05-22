import { Schema, Document } from 'mongoose';
import { UserRole } from '../enums/user-role.enum';

export const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
}, {
  _id: false,
  versionKey: false
});

export interface User extends Document {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
