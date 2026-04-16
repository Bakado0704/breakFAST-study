import { UserFormValue } from '@/types/UserForm.types';
import { useForm } from 'react-hook-form';
import styles from './InputPage.module.scss';

const InputPage = () => {
  const methods = useForm<UserFormValue>();
  return (
    <div className={styles.container}>
      {/* <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <input type="text" {...methods.register('name')} />
        </form>
      </FormProvider> */}
    </div>
  );
};

export default InputPage;
