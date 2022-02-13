import { ChakraProvider, Container } from '@chakra-ui/react'
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxWidth="1440px">
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </Container>
    </ChakraProvider>
  )
}

export default MyApp