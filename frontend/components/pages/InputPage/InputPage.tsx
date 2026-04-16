import { FormProvider, useForm } from 'react-hook-form';

import { FlexBox, Input, Loader, Typography } from '@/components/common';
import { UserFormValue } from '@/types/UserForm.types';

import styles from './InputPage.module.scss';
import { useInput } from './useInput.hooks';

const InputPageInternal = () => {
  const { onCreateUser, register, errors, isLoading } = useInput();

  return (
    <>
      {isLoading && <Loader />}
      <FlexBox
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="3.2rem"
        className={styles.container}
      >
        <FlexBox flexDirection="column" gap="1.6rem" width="100%">
          <Input
            dataTestId="name-input"
            label="名前"
            required
            placeholder="名前を入力してください"
            {...register('name')}
            error={errors.name?.message}
          />
          <Input
            dataTestId="email-input"
            label="メールアドレス"
            required
            placeholder="メールアドレスを入力してください"
            {...register('email')}
            error={errors.email?.message}
          />
        </FlexBox>
        <FlexBox
          alignItems="center"
          justifyContent="center"
          onClick={onCreateUser}
          className={styles.submitButton}
        >
          <Typography color="w1">送信する</Typography>
        </FlexBox>
      </FlexBox>
    </>
  );
};

const InputPage = () => {
  const methods = useForm<UserFormValue>();

  return (
    <FormProvider {...methods}>
      <InputPageInternal />
    </FormProvider>
  );
};

export default InputPage;
