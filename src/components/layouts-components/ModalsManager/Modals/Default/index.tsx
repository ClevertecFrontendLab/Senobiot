import {
    Box,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import * as styles from './Default.styles';

export type ModalPopupProps = {
    isOpen: boolean;
    imageSrc?: string;
    onClose: () => void;
    header?: string;
    description?: ReactElement;
    content?: ReactElement;
    footer?: ReactElement;
    dataTestIdWindow?: string;
    dataTestIdCloseButton?: string;
};

export const ModalPopup: React.FC<ModalPopupProps> = ({
    isOpen,
    onClose,
    imageSrc,
    header,
    description,
    content,
    footer,
    dataTestIdWindow,
    dataTestIdCloseButton,
}) => (
    <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset='scale'
    >
        <ModalOverlay sx={styles.overlay} />
        <ModalContent
            sx={styles.content}
            data-test-id={dataTestIdWindow}
            containerProps={{ zIndex: 150 }}
        >
            <ModalCloseButton sx={styles.closeButton} data-test-id={dataTestIdCloseButton} />
            {imageSrc && <Image sx={styles.image} src={imageSrc} alt='popup' />}
            <VStack gap={0}>
                <ModalHeader sx={styles.header}>{header}</ModalHeader>
                <Box sx={styles.description}>{description}</Box>
            </VStack>
            <ModalBody sx={styles.body}>{content}</ModalBody>
            {footer && <ModalFooter sx={styles.footer}>{footer}</ModalFooter>}
        </ModalContent>
    </Modal>
);
