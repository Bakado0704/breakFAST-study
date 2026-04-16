import { InputPage } from '@/components/pages/InputPage';
import { userRepository } from '@/repository/firebase';

export function Index() {
  return <InputPage />;
}

export default Index;

export const getServerSideProps = async () => {
  const user = await userRepository.get({ id: '1' });

  return {
    props: {
      user,
    },
  };
};
