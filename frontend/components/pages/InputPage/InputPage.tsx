import { FormProvider, useForm } from 'react-hook-form';

import { UserFormValue } from '@/types/UserForm.types';

import styles from './InputPage.module.scss';

const InputPage = () => {
  const methods = useForm<UserFormValue>();
  const onSubmit = (data: UserFormValue) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <input type="text" {...methods.register('name')} />
        </form>
      </FormProvider>
    </div>
  );
};

export default InputPage;
