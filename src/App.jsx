import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./screen/Home";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
