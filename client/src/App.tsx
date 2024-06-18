import "@mantine/core/styles.css";
import { MantineProvider, Text } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Text fz={"h1"}>Hello World</Text>
    </MantineProvider>
  );
}

export default App;
