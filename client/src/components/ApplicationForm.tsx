import {
  Box,
  Flex,
  NumberInput,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";

const ApplicationForm = () => {
  return (
    <Box mt="2rem">
      <Title order={6} fz="1.1rem" fw={600}>
        Tell us about your self
      </Title>
      <form>
        <Flex direction={"column"} gap="1.2rem">
          <TextInput label="First Name" required />
          <TextInput label="Last Name" required />
          <NumberInput hideControls label="Phone Number" />
          <TextInput label="Email" required />
          <TimeInput label="Time interval when it’s better to call (in case a call is needed)" />
          <TextInput label="LinkedIn Profile url" />
          <TextInput label="Github Profile url" />
          <Textarea label="Message" required resize="vertical" />
        </Flex>
      </form>
    </Box>
  );
};

export default ApplicationForm;
