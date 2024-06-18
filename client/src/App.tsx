import "@mantine/core/styles.css";
import { Box, Input, MantineProvider, createTheme } from "@mantine/core";
import Application from "./components/Application";

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

function App() {
  return (
    <MantineProvider theme={theme}>
      <Box w={"100vw"} bg={"#F4F7F9"} py="3rem">
        <Application />
      </Box>
    </MantineProvider>
  );
}

export default App;
