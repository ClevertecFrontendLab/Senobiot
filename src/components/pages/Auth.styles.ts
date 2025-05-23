export const buttonRegister = {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '28px',
    color: '#fff',
    bg: '#000',
    w: '100%',
    h: 12,
    mt: 6,
};

export const buttonLogin = {
    ...buttonRegister,
    mt: '88px',
};

export const progressWrapper = {
    gap: 0,
    w: '100%',
    alignItems: 'flex-start',
};

export const progressBar = {
    background: 'blackAlpha.100',
    width: '100%',
    '& div[role="progressbar"]': {
        backgroundImage:
            'linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent)',
        backgroundColor: 'lime.300',
    },
};

export const form = {
    w: 'inherit',
};

export const restore = {
    mt: -2,
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#000',
};
