import { Avatar, Box, Button, Flex } from "@chakra-ui/react";
import HomeSeeker from "../public/HomeSeeker-Logo.png"
import Image from "next/image";
import Link
 from "next/link";
const NavBar = (props) =>{
    return(<>
    
    <Flex justifyContent="space-between" align="center" minW="100%" maxWidth="1920px">
        <Box>
            <Link href="/">
                <Image src={HomeSeeker} width="200px" height="100px"/>
            </Link>
        </Box>
        <Flex align="center" maxW="100%">
            <Link href="/">
                <Button marginX="10px" colorScheme="blue" variant="ghost">Buy</Button>
            </Link>
            <Link href="/sell">
                <Button marginX="10px" colorScheme="blue"  variant="ghost">Sell my Home</Button>
            </Link>
            <Avatar marginX="20px" size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Flex>
    </Flex>
    </>)
}

export default NavBar;