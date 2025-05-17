export const overlay = {
    backdropFilter: 'blur(2px)',
    zIndex: 99,
};

export const content = {
    w: { base: '316px', xl: '396px' },
    maxW: { base: '316px', xl: '396px' },
    minH: { base: '380px', xl: '478px' },
    p: 8,
    borderRadius: 'md',
    justifyContent: 'space-between',
    fontFamily: 'Inter',
};

export const closeButton = {
    border: '2px solid black',
    borderRadius: '50%',
    top: 6,
    right: 6,
    w: 6,
    h: 6,
    svg: {
        w: 2.5,
        h: 2.5,
    },
};

export const image = {
    w: { base: '106px', xl: '208px' },
    h: { base: '106px', xl: '208px' },
    mx: 'auto',
};

export const header = {
    p: 0,
    fontWeight: 700,
    color: '#000',
    fontSize: '24px',
    mb: 4,
    whiteSpace: 'pre-line',
    textAlign: 'center',
};

export const description = {
    textAlign: 'center',
    px: { base: 0, xl: 6 },
    color: 'blackAlpha.900',
    fontSize: '16px',
    span: {
        ':first-of-type': {
            display: 'block',
            fontWeight: 600,
            w: '100%',
        },
    },
};

export const footer = {
    p: 0,
    mt: 6,
    justifyContent: 'center',
    fontSize: '12px',
    color: 'blackAlpha.600',
    a: {
        textDecoration: 'underline',
    },
    textAlign: 'center',
};

export const body = {
    flexGrow: 0,
    p: 0,
};
