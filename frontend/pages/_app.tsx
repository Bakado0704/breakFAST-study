import { Layout } from '@/components/features/Layout';
import { NavHead } from '@/components/features/NavHead';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavHead />
      <Component {...pageProps} />
    </Layout>
  );
}
