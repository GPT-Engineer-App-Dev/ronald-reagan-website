import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minH="100vh" p={5}>
      <Box boxSize="sm">
        <Image src="/images/ronald-reagan.jpg" alt="Ronald Reagan" borderRadius="lg" />
      </Box>
      <Text fontSize="2xl" fontWeight="bold">Welcome to Ronald Reagan's Personal Website</Text>
      <Text fontSize="lg" p={3}>
        Explore the life and legacy of Ronald Reagan, the 40th President of the United States.
      </Text>
      <Box as="button" p={4} color="white" fontWeight="bold" borderRadius="md" bgGradient="linear(to-r, brand.700, brand.900)" _hover={{ bgGradient: "linear(to-r, brand.900, brand.700)" }}>
        Learn More <FaInfoCircle />
      </Box>
    </VStack>
  );
};

export default Index;