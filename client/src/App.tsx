import "@mantine/core/styles.css";
import { Box, Input, MantineProvider, createTheme } from "@mantine/core";
import Application from "./components/Application";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = createTheme({
  components: {
    Input: Input.extend({
      styles: {
        input: {
          background: "#EFF3F6",
        },
      },
    }),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Box w={"100vw"} bg={"#F4F7F9"} py="3rem">
          <Application />
        </Box>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
