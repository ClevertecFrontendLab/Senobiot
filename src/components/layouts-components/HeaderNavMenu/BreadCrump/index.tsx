import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router';

import { TEST_IDS } from '~/constants';
import { useBreadCrumbs } from '~/hooks';

const BreadCrump: React.FC<{
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ onClick }) => {
    const { breadcrumbs } = useBreadCrumbs();

    const breadcrumbsKeys = Object.entries({ area: { label: 'Главная', to: '/' }, ...breadcrumbs });

    return (
        <Breadcrumb
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
            data-test-id={TEST_IDS.breadcrumbs}
            sx={{
                '& ol': {
                    flexWrap: 'wrap',
                },
            }}
        >
            {breadcrumbsKeys.map((item, index) => {
                const isLast = index === breadcrumbsKeys.length - 1;
                const { label, to } = item[1];

                return (
                    <BreadcrumbItem key={index}>
                        {isLast ? (
                            <span>{label}</span>
                        ) : (
                            <BreadcrumbLink
                                onClick={onClick}
                                as={Link}
                                to={to}
                                color='blackAlpha.700'
                            >
                                {label}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
export default BreadCrump;
