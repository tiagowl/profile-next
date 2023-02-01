import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useFocusEffect } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props{
    open: boolean
}

export default function Likes({open}: Props){

    const { onClose } = useDisclosure();

    return(
        <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}