import { HStack, PinInput, PinInputField, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { TEST_IDS } from '~/constants';
import { useVerifyOtpMutation } from '~/redux';
import { selectError, selectUserEmail } from '~/redux/selectors';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const EnterPin: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const email = useSelector(selectUserEmail);
    const popupError = useSelector(selectError);
    const [isInvalidCode, setIsInvalidCode] = useState<boolean>(false);
    const [code, setCode] = useState('');

    const [verify, { isError }] = useVerifyOtpMutation();
    const handleVerify = (otpToken: string) => verify({ email, otpToken });

    useEffect(() => {
        if (isError && !popupError) {
            setIsInvalidCode(true);
            setCode('');
        }
    }, [isError, popupError]);
    const description = (
        <Text>
            Мы отправили вам на почту
            <Text as='span'>{email}</Text>
            шестизначный код.&nbsp;
            <Text as='span' display={{ base: 'block', xl: 'initial' }}>
                Введите его ниже.
            </Text>
        </Text>
    );
    const footer = <Text>Не пришло письмо? Проверьте папку Спам.</Text>;

    const content = (
        <HStack mt={4} justifyContent='center'>
            <PinInput
                otp
                onComplete={handleVerify}
                isInvalid={isInvalidCode}
                value={code}
                onChange={setCode}
            >
                {Array(6)
                    .fill(0)
                    .map((_, i) => (
                        <PinInputField
                            key={i}
                            data-test-id={`${TEST_IDS.modals.otp.digitInput}${i}`}
                        />
                    ))}
            </PinInput>
        </HStack>
    );

    return (
        <ModalPopup
            isOpen={isOpen}
            onClose={onClose}
            imageSrc='/modals/modal-error.png'
            description={description}
            footer={footer}
            content={content}
            dataTestIdCloseButton={TEST_IDS.modals.otp.closeButton}
            dataTestIdWindow={TEST_IDS.modals.otp.window}
        />
    );
};
