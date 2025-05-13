export const pageWrapper = {
    minH: '100vh',
    w: '100%',
    background: {
        base: 'linear-gradient(236.9deg, #EAFFC7 30.27%, #29813F 136.1%), #FFFFFF',
        xl: 'url("auth-bg.webp") no-repeat  right center / 50% 100%, linear-gradient(236.9deg, #EAFFC7 30.27%, #29813F 136.1%), #FFFFFF',
    },
    p: { base: '72px 26px 26px', md: '140px 30px 30px', xl: '170px 30px 30px' },

    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
};

export const contentWrapper = {
    w: { base: '100%', xl: '50%' },
    ml: 0,
};

export const formWrapper = {
    w: { base: '328px', md: '355px', xl: '451px', '2xl': '461px' },
};

export const copyrightWrapper = {
    w: '100%',
    justifyContent: 'space-between',
    '& > p': {
        fontSize: '12px',
        fontWeight: 600,
    },
    '& > :last-child': {
        display: { base: 'none', xl: 'initial' },
    },
};

export const logoWrapper = {
    mb: { base: 10, md: 14, xl: 20 },
};

export const logo = {
    h: { base: 10, xl: 16 },
};

export const logoText = {
    h: { base: '30px', xl: '50px' },
};

export const tab = {
    px: 6,
    _selected: {
        color: 'lime.700',
        borderBottom: '2px solid',
        borderColor: 'lime.700',
    },
    outline: 'none',
    _hover: { bg: 'none' },
    _focus: {
        outline: 'none',
        boxShadow: 'none',
    },
    color: '#134B00',
    fontSize: { base: '16px', xl: '18px' },
    fontWeight: 500,
    lineHeight: '28px',
};

export const tablist = {
    gap: 4,
    mb: 10,
    borderBottom: '2px solid rgba(0, 0, 0, 0.08)',
};

export const tabs = {
    w: '100%',
};
