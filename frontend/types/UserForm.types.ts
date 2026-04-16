import { z } from 'zod';

export const UserFormSchema = z.object({
  name: z.string().min(1, '必須項目です'),
  email: z.string().email('メールアドレスが不正です'),
});

export type UserFormValue = z.infer<typeof UserFormSchema>;
