import { Button, Image } from '@chakra-ui/react';

export interface ButtonBookBtnProps {
    bookBtnText?: string;
    bookBtnTextcolor?: string;
    bookBtnBorderColor?: string;
    bookBtnBg?: string;
    bookBtnBorder?: string;
    bookBtnBorderRadius?: string;
    bookBtnVariant?: string;
    bookBtnIconUrl?: string;
    bookBtnIconAltText?: string;
    bookBtnIconsize?: string;
}

const ButtonbookBtn: React.FC<ButtonBookBtnProps> = ({
    bookBtnText,
    bookBtnTextcolor,
    bookBtnBorderColor,
    bookBtnBg,
    bookBtnBorder = '2px solid',
    bookBtnBorderRadius = 'md',
    bookBtnVariant = 'outline',
    bookBtnIconUrl = '/icons/bookBtns/heart.svg',
    bookBtnIconAltText = 'Сохранить',
    bookBtnIconsize = '24px',
}) => (
    <Button
        bg={bookBtnBg}
        color={bookBtnTextcolor}
        borderRadius={bookBtnBorderRadius}
        border={bookBtnBorder}
        borderColor={bookBtnBorderColor}
        leftIcon={<Image src={bookBtnIconUrl} alt={bookBtnIconAltText} boxSize={bookBtnIconsize} />}
        variant={bookBtnVariant}
    >
        {bookBtnText}
    </Button>
);

export default ButtonbookBtn;
