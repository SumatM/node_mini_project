import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="xl" mt={8}>
        Welcome to My Writing Practice!
      </Heading>
      <Text fontSize="lg" mt={4}>
        This is the right time to practice your writing skills.
      </Text>
      <Text fontSize="lg" mt={4}>
        You can be as creative as you want.
      </Text>
      <Text fontSize="lg" mt={4}>
        For example, you can use images or gifs:
      </Text>
      <Box mt={8}>
        {/* Replace the placeholder image with your own image or gif */}
        <img
          src="/creative-image.gif"
          alt="Creative Image"
          width={400}
          height={300}
        />
      </Box>
    </Box>
  );
}
