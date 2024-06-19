import { Box, Button, Flex, TextInput, Textarea, Title } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { schema } from "../schema/ApplicationFormSchema";
import { ApplicationInputTypes } from "../types/ApplicationInputTypes";
import {
  checkEmailExists,
  saveCandidateInfo,
  updateCandidateInfo,
} from "../api";
import { useMutation } from "react-query";
import NotificationBanner from "./NotificationBanner";
import { useState } from "react";
import EmailInput from "./EmailInput";

const ApplicationForm = () => {
  const [showSuccesBanner, setShowSuccesBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const form = useForm<ApplicationInputTypes>({
    mode: "uncontrolled",
    validate: zodResolver(schema),
  });
  const { mutate: saveCandidate } = useMutation(saveCandidateInfo);
  const { mutate: emailMutate } = useMutation(checkEmailExists);
  const { mutate: updateCandidate } = useMutation(updateCandidateInfo);

  const handleFormValues = (values: ApplicationInputTypes) => {
    if (showAlert) {
      updateCandidate(values, {
        onSuccess: () => {
          setShowSuccesBanner(true);
        },
        onError: () => {
          setShowErrorBanner(true);
        },
      });
    } else {
      saveCandidate(values, {
        onSuccess: () => {
          setShowSuccesBanner(true);
        },
        onError: () => {
          setShowErrorBanner(true);
        },
      });
    }
  };

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const email = event.target.value;
    emailMutate(
      {
        email,
      },
      {
        onSuccess: (response) => {
          if (Object.keys(response?.data)?.length > 0) {
            setShowAlert(true);
          } else {
            setShowAlert(false);
          }
        },
      }
    );
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
          <EmailInput
            form={form}
            handleEmailInputChange={handleEmailInputChange}
            showAlert={showAlert}
          />
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
