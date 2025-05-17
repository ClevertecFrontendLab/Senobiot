import { HStack, PinInput, PinInputField, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { TEST_IDS } from '~/constants';
import { useVerifyOtpMutation } from '~/redux';
import { selectUserEmail } from '~/redux/selectors';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const EnterPin: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const email = useSelector(selectUserEmail);
    const [isInvalidCode, setIsInvalidCode] = useState<boolean>(false);
    const [code, setCode] = useState('');

    const [verify, { error, isLoading }] = useVerifyOtpMutation();

    const handleVerify = (otpToken: string) => {
        verify({ email, otpToken });
        setIsInvalidCode(false);
    };

    useEffect(() => {
        if (error && 'status' in error) {
            const { status } = error;
            const statusCode: number = Number(status);

            if (statusCode === 403) {
                setIsInvalidCode(true);
                setCode('');
            }

            if (statusCode === 500) {
                setIsInvalidCode(false);
                setCode('');
            }
        }
    }, [error]);
    const description = (
        <Text>
            Мы отправили вам на e-mail
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
                isDisabled={isLoading}
            >
                {Array(6)
                    .fill(0)
                    .map((_, i) => (
                        <PinInputField
                            key={i}
                            data-test-id={`${TEST_IDS.modals.otp.digitInput}${i + 1}`}
                        />
                    ))}
            </PinInput>
        </HStack>
    );

    return (
        <ModalPopup
            header={isInvalidCode ? 'Неверный код' : ''}
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
