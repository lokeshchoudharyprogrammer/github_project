import HistoryModal from "./HistoryModal";
import { Box, Button, Flex, useDisclosure, ButtonGroup, Image } from '@chakra-ui/react';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
            <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
                <Image width="145px" src={"https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"} fill alt='github logo' sx={{ filter: "invert(1)" }} />
            </Box>
            <Box>
                <Button size='md' colorScheme='whatsapp' onClick={onOpen}>
                    Search History
                </Button>
            </Box>

            {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
        </Flex>
    );
};

export default Navbar;