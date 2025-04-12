export const PADDINGS: {
    bottomMnu: number;
    footer: number;
    [key: string]: number | { [key: string]: number };
} = {
    topMenu: { base: 16, xl: 20 },
    bottomMnu: 21,
    sideMenu: 16,
    footer: 24,
    header: { base: 20, xl: 28 },
    content: 280,
    sectionMx: { base: 0, xl: 280 },
    subsectionMb: { base: 8, xl: 10 },
    subsectionHeaderMb: { base: 3, xl: 4, '2xl': 6 },
} as const;

export const WIDTHS: { [key: string]: number } = {
    sideMenu: 64,
};

export const SHADOWS: { [key: string]: string } = {
    main: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
    green: 'radial-gradient(  circle at 50% 50%,   rgba(196, 255, 97, 0.7) 0%,   rgba(255, 255, 255, 0) 50%)',
    sideMunu: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

export const BORDERS: { [key: string]: string } = {
    main: '1px solid rgba(0, 0, 0, 0.48)',
    light: '1px solid rgba(0, 0, 0, 0.08)',
};

// p (padding)
// px (horizontal padding)
// py (vertical padding)
// pt (padding top)
// pb (padding bottom)
// pl (padding left)
// pr (padding right)
// m (margin)
// mx (horizontal margin)
// my (vertical margin)
// mt (margin top)
// mb (margin bottom)
// ml (margin left)
// mr (margin right)

// xs	0.75rem	12px
// sm	0.875rem	14px
// md	1rem	16px
// lg	1.125rem	18px
// xl	1.25rem	20px
// 2xl	1.5rem	24px
// 3xl	1.875rem	30px
// 4xl	2.25rem	36px
// 5xl	3rem	48px
// 6xl	3.75rem	60px
// 7xl	4.5rem	72px
// 8xl	6rem	96px
// 9xl	8rem	128px
