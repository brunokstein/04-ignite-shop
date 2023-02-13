import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import LogoSVG from '../assets/logo-ignite.svg'
import Image from 'next/image';
import { Container, Header } from '@/styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoSVG} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
