import type { IPost } from "./post.interface";

export type Role = 'recruiter' | 'applicant';

interface DateParams {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface User extends DateParams {
  _id: string;
  email: string;
  tags: string[];
  photoUrl?: string;
  resume?: string;
  posts?: IPost[];
}

export interface UserAuth extends User{
  token: string;
}

export interface RoleCard {
  id: number;
  title: string;
  description: string;
  role: Role;
  active: boolean;
}

export interface UpdateUserData {
  photoUrl?: string;
  resume?: string;
};
