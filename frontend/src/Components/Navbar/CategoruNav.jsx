import React from "react";
import {
  Flex,
  Tabs,
  TabList,
  Tab,
  Spacer,
  Center,
} from "@chakra-ui/react";

const CategoryNav = () => {
  return (
    <Center
    overflowX="auto"
      display={{ base: "none", md: "center", lg: "center" }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Home
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Foods
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Personal Care
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Cleaning & Household
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Stationary
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Nutricorner
            </Tab>{" "}
          </TabList>
        </Tabs>
        <Spacer />
      </Flex>
    </Center>
  );
};

export default CategoryNav;
