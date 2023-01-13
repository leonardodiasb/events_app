import MainLayout from '../src/components/layout/MainLayout';
import '../styles/general.scss';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  );
}
