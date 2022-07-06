import '../styles/globals.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  QueryCache,
  ReactQueryCacheProvider,

} from 'react-query'


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}> <Component {...pageProps} /> </QueryClientProvider>


  // return <Component {...pageProps} />
}

export default MyApp
