import { useState } from "react";

import {
  ChakraProvider,
  Container,
  Flex,
  Avatar,
  Badge,
  Heading,
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Center,
  Text,
  Button,
  ColorModeScript,
  Divider,
  Spacer,
  Image
} from "@chakra-ui/react";
import Head from "next/head";
import TaskList from "../component/TaskList";
import { preListingTaskInitialData, listedTaskInitialData, closingTasksInitialData } from "../data/testData.js";



export default function Sell() {
    const totalTask = preListingTaskInitialData.length + listedTaskInitialData.length + closingTasksInitialData.length;
    const [preListingTask, setPreListingTask] = useState(preListingTaskInitialData)
    const [listedTask, setList] = useState(listedTaskInitialData)
    const [closingTask, setclosingTask] = useState(closingTasksInitialData)

    return(
        <Flex w="100%" >
                {/* Container Info Right */}
                <Box width="25%"  borderRadius="10px">
                  <Flex
                    minHeight="100%"
                    justifyItems="center"
                    justifyContent="center"
                    flexGrow="1"
                    flexDirection="column"
                  >
                    <Flex flexDirection="column" marginBottom="40px">
                      <Center>
                        <Heading>
                          Your Home
                        </Heading>
                      </Center>
                    </Flex>
                    <Center>
                        <Image borderRadius="lg" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyamin-mellish-1396122.jpg&fm=jpg"/>
                    </Center>
                    <Center marginTop="10px">
                        <Heading size="md">Draft</Heading>
                    </Center>

                    <Center borderY="1px" borderRadius="3px" padding="5px" flexDir="column" marginTop="20px">
                      <Heading size="sm">Property</Heading>
                      <Text >1234 Yellow Brick Road</Text>
                      <Text>Wonderland, KS, 99999</Text>
                    </Center>

                    <Spacer />
                    <Center>
                        <Button w="160px" colorScheme="red">Remove</Button>
                    </Center>
                  </Flex>
                </Box>

                {/* Container Task Right */}
                <Box  width="75%" padding="20px">
                  <Flex flexDir="row-reverse">
                    <Heading size="md"># of Task : {totalTask}</Heading>
                  </Flex>

                  <Center marginTop="10px">
                    <Heading size="md">Pre-Listing Task</Heading>
                  </Center>
                  <TaskList taskList={preListingTask} handleCompleted={() => console.log("hello")} />
                  <Center marginTop="40px">
                    <Heading size="md">Listed Task</Heading>
                  </Center>
                  <TaskList taskList={listedTask} handleCompleted={() => console.log("hello")} />
                  <Center marginTop="40px">
                    <Heading size="md">Closing Task</Heading>
                  </Center>
                  <TaskList taskList={closingTask} handleCompleted={() => console.log("hello")} />
                </Box>
              </Flex>
    )
}
