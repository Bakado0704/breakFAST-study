import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { createUser } from '@/service/createUser';
import { UserFormSchema, UserFormValue } from '@/types/UserForm.types';

export const useInput = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(UserFormSchema),
  });

  const onSubmit = async (data: UserFormValue) => {
    setIsLoading(true);
    try {
      await createUser(data);
      router.push('/');
    } catch (error) {
      throw new Error('ユーザーの作成に失敗しました');
    } finally {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const onCreateUser = () => {
    handleSubmit((data) => onSubmit(data))();
  };

  return {
    onCreateUser,
    register,
    errors,
    isLoading,
  };
};
