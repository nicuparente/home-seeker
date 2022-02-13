import { Container, Box, Heading, Input, Flex, Image } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="HomeSeeker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex 
         backgroundImage="https://images.pexels.com/photos/9203785/pexels-photo-9203785.jpeg?cs=srgb&dl=pexels-erik-mclean-9203785.jpg&fm=jpg"
         backgroundPosition="center"
         w="100%"
         minH="40vh"
         borderRadius="lg"
         flexDir="column"
         alignItems="center"        
        >
          <Heading marginY="40px" w="100%" textAlign="center" color="white">Your home awaits</Heading>
          <Input maxW="60%"  size="lg" placeholder="Find it in Wakanda..." bg="white"/>
        </Flex>
        <Heading marginY="30px">Hottest Neighborhoods</Heading>
        <Flex  flexWrap="wrap" justifyContent="space-between" minH={"300px"}>
            <Flex marginY="20px" flexDir="column" alignItems="center" justifyContent="center" width={"350px"} borderRadius="lg" backgroundColor="gray.100" >
              <Heading marginY="20px" size="lg">Seattle</Heading>
              <Image padding="1px" src="https://uploads.visitseattle.org/2019/03/27195924/seattle-skyline-2.1_C531A512-800C-43BD-89FD77662BD66904_1efd626b-a684-4303-a3c45abb80589553.jpg"/>
            </Flex>
            <Flex marginY="20px" flexDir="column" alignItems="center" justifyContent="center" width={"350px"} borderRadius="lg" backgroundColor="gray.100" >
              <Heading marginY="20px" size="lg">Houston</Heading>
              <Image padding="1px" src="https://th.bing.com/th/id/R.de484abf950f79e893ebbe27e875b962?rik=EHpScqrBAcyeOw&riu=http%3a%2f%2fd279m997dpfwgl.cloudfront.net%2fwp%2f2015%2f06%2f0622_houston-1000x667.jpg&ehk=5sYnT11TpStny6H0nySljENdh3O1KCXN1%2bPgJn7Fx%2fE%3d&risl=&pid=ImgRaw&r=0"/>
            </Flex>
            <Flex marginY="20px" flexDir="column" alignItems="center" justifyContent="center" width={"350px"}  borderRadius="lg" backgroundColor="gray.100" >
              <Heading marginY="20px" size="lg">Miami</Heading>
              <Image padding="1px" src="https://hips.hearstapps.com/cos.h-cdn.co/assets/cm/14/25/53a04bea9fac4_-_cos-17-tel-aviv-beach-de.jpg?resize=480:*"/>
            </Flex>
        </Flex>
      </main>
    </div>
  )
}
