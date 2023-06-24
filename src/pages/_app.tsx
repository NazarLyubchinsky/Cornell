import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//impory bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/burger.css'
import Layouts from '@/layouts';
//redux
import { Provider } from 'react-redux';
import { store } from '@/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
    </Provider>
  )
}