import { Box, Container, Flex, Text, Title } from "@mantine/core";
import ApplicationForm from "./ApplicationForm";

const Application = () => {
  return (
    <Container
      bg="#ffffff"
      h="100%"
      style={{
        borderRadius: "12px",
      }}
    >
      <Box px="8rem" py="3rem">
        <Box>
          <Title
            order={6}
            style={{
              color: "#797979",
            }}
            fz="1.2rem"
            fw={400}
          >
            Welcome to Sigma Software
          </Title>
          <Flex direction={"column"} gap="0.5rem" mt="1.5rem">
            <Title order={1}>Let's Get Started with Sigma Software</Title>
            <Text
              style={{
                color: "#797979",
              }}
              fz={"0.9rem"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              maxime odio! Explicabo, architecto dolores ex optio deleniti quas
              at rem corrupti, dignissimos quaerat natus odit tempore aperiam ab
              voluptates qui!
            </Text>
          </Flex>
        </Box>
        <ApplicationForm />
      </Box>
    </Container>
  );
};

export default Application;
