import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '../stores/Root/store.tanstack';
import DarkMode from '../components/DarkModeButton';
import axios from 'axios';

export const Http_client = axios.create({
  baseURL: 'https://api.sampleapis.com/coffee',
  timeout: 5000,
  params: {},
});

function App() {
  return (
    <div className="App bg-lightbg dark:bg-darkbg h-screen flex justify-center items-center">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkMode />
        <h1 className="text-primary dark:text-white">Hello World</h1>
      </QueryClientProvider>
    </div>
  );
}

export default App;
