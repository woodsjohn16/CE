import '../styles/base.scss'
import type { AppProps } from 'next/app'
// import App from 'next/app'
import { Provider } from 'react-redux'

import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
