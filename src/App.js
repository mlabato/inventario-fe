import { ChakraProvider} from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import theme from './theme';

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'



function App() {
  return (
   <ChakraProvider theme={theme}>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
   </ChakraProvider>
  );
}

export default App;
