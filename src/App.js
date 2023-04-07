import { ChakraProvider} from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';



function App() {
  return (
   <ChakraProvider>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
   </ChakraProvider>
  );
}

export default App;
