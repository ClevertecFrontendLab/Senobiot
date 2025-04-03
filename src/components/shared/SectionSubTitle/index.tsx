import React from 'react';

import SectionTitle, { SectionTitleProps } from '../SectionTitle';

interface SubTitleProps extends SectionTitleProps {
    title: string;
    fontSize?: string;
    fontWeight?: string;
}

const SectionSubTitle: React.FC<SubTitleProps> = ({ title, fontWeight = '500', ...restProps }) => (
    <SectionTitle title={title} fontWeight={fontWeight} {...restProps} />
);

export default SectionSubTitle;
