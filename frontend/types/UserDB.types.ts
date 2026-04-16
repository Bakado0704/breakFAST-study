import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export type UserDB = z.infer<typeof UserSchema>;
export const parseUserDB = (value: unknown): UserDB => UserSchema.parse(value);
