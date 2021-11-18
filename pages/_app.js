import '../styles/globals.css'
import { Provider } from "next-auth/client"
import { ChakraProvider } from "@chakra-ui/react"
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
      <Provider session={pageProps.session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
  )
}

export default appWithTranslation(MyApp)