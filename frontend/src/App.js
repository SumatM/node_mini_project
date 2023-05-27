
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import RoutesProvider from './routes/Routes';

function App() {
  return (
    <Box>
      <Navbar/>
      <RoutesProvider/>
    </Box>
  );
}

export default App;
