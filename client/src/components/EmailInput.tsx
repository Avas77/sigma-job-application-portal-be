import { Alert, Box, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { ApplicationInputTypes } from "../types/ApplicationInputTypes";

interface IEmailInputProps {
  form: UseFormReturnType<ApplicationInputTypes>;
  handleEmailInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showAlert: boolean;
}

const EmailInput = ({
  form,
  handleEmailInputChange,
  showAlert,
}: IEmailInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.getInputProps("email").onChange(event);
    handleEmailInputChange(event);
  };

  return (
    <Box>
      <TextInput
        label="Email"
        required
        {...form.getInputProps("email")}
        onChange={handleChange}
      />
      {showAlert ? (
        <Alert
          variant="light"
          color="blue"
          title="Email Already Exists"
          mt="1rem"
        >
          This email already exist. The new information added will update the
          information of this candidate
        </Alert>
      ) : null}
    </Box>
  );
};

export default EmailInput;
