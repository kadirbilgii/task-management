import { Schema, Document } from 'mongoose';
import { UserRole } from '../enums/user-role.enum';

export const CompanyUserSchema = new Schema({
  _id: { type: String, required: true },
  companyId: { type: String, required: true },
  userId: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
}, {
  _id: false,
  versionKey: false
});

export interface CompanyUser extends Document {
  id: string;
  companyId: string;
  userId: string;
  role: UserRole;
}
