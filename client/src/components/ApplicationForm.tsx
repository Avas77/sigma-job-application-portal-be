import { Box, Button, Flex, TextInput, Textarea, Title } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { schema } from "../schema/ApplicationFormSchema";
import { ApplicationInputTypes } from "../types/ApplicationInputTypes";
import { saveCandidateInfo } from "../api";
import { useMutation } from "react-query";
import NotificationBanner from "./NotificationBanner";
import { useState } from "react";

const ApplicationForm = () => {
  const [showSuccesBanner, setShowSuccesBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const form = useForm<ApplicationInputTypes>({
    mode: "uncontrolled",
    validate: zodResolver(schema),
  });
  const { mutate } = useMutation(saveCandidateInfo);

  const handleFormValues = (values: ApplicationInputTypes) => {
    mutate(values, {
      onSuccess: () => {
        setShowSuccesBanner(true);
      },
      onError: () => {
        setShowErrorBanner(true);
      },
    });
  };

  return (
    <Box mt="2rem">
      {showSuccesBanner ? (
        <NotificationBanner
          title="Candidate Info saved successfully"
          message="Thank you for submitting your information"
          color="green"
          mb="2rem"
          onClose={() => setShowSuccesBanner(false)}
        />
      ) : null}
      {showErrorBanner ? (
        <NotificationBanner
          title="An Error occured"
          message="Something went wrong"
          color="red"
          mb="2rem"
          onClose={() => setShowErrorBanner(false)}
        />
      ) : null}
      <Title order={6} fz="1.1rem" fw={600}>
        Tell us about your self
      </Title>
      <form onSubmit={form.onSubmit(handleFormValues)}>
        <Flex direction={"column"} gap="1.2rem">
          <TextInput
            label="First Name"
            required
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            required
            {...form.getInputProps("lastName")}
          />
          <TextInput
            type="tel"
            label="Phone Number"
            {...form.getInputProps("phoneNumber")}
          />
          <TextInput label="Email" required {...form.getInputProps("email")} />
          <TimeInput
            label="Time interval when it’s better to call (in case a call is needed)"
            {...form.getInputProps("timeInterval")}
          />
          <TextInput
            label="LinkedIn Profile url"
            {...form.getInputProps("linkedin")}
          />
          <TextInput
            label="Github Profile url"
            {...form.getInputProps("github")}
          />
          <Textarea
            label="Message"
            required
            resize="vertical"
            {...form.getInputProps("message")}
          />
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ApplicationForm;
