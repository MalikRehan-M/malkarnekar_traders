import * as React from "react";
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  chakra,
  Stack,
  HStack,
  Icon,
  useBreakpointValue,
  useColorModeValue,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const statData = [
  {
    label: "Weekly downloads",
    score: "3.2M",
  },
  {
    label: "Stars on GitHub",
    score: "77k",
  },
  {
    label: "Contributors",
    score: "2.4k",
  },
  {
    label: "Followers on Twitter",
    score: "17k",
  },
];

const planList = [
  "Customer obsessed. We put our customers front & center.",
  "Transparency. Most of our work is public.",
  "Freedom. We work from anywhere in the world.",
  "Autonomy. We want to create a safe, high-trust team.",
  "Excellence. We are aiming high, and we know it.",
];
const milestones = [
  {
    id: 1,
    date: "MARCH 30, 2022",
    title: "Chakra Hackathon",
    description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`,
  },
  {
    id: 2,
    date: "July 30, 2021",
    title: "Open Source, first contribution",
    description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`,
  },
  {
    id: 3,
    date: "July 30, 2018",
    title: "Freelancing, started working for myself",
    description:
      "Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.",
  },
];

const About = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Container maxW="6xl" p={{ base: 4, sm: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Malkarnekar Traders
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        pt={14}
      >
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            Our ultimate goal
          </chakra.h1>
          <Text fontSize="md" color="gray.400" maxW="480px">
            We aim high trying to design the most effective and efficient tool
            for building UIs, for developers and designers. ChakraUI started
            back in 2019, to unify React. Since then, we've become a community
            of over 2M developers from every corner of the world.
          </Text>

          <Stack spacing={2}>
            <Text fontSize="md" color="gray.400">
              We plan on doing all that cultivating our values:
            </Text>
            {planList.map((data, index) => (
              <HStack key={index} alignItems="center" spacing={1} fontSize="md">
                <Icon as={AiFillCheckCircle} w={4} h={4} color="blue.400" />
                <Text fontSize="md">{data}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <SimpleGrid
            columns={2}
            spacing={5}
            pt={8}
            pl={{ base: 0, md: 10 }}
            margin="auto 0"
          >
            {statData.map((data, index) => (
              <Stack
                key={index}
                pl={3}
                py={1}
                pr={1}
                borderLeft="2px solid"
                borderLeftColor="blue.400"
                justifyContent="space-between"
              >
                <Box fontSize="2xl" fontWeight="bold">
                  {data.score}
                </Box>
                <Text fontSize="md">{data.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={"blue.500"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};
