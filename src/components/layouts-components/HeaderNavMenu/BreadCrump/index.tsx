import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { getNavBranches } from '~/configs/navigationConfig';

const BreadCrump: React.FC = () => {
    const { pathname } = useLocation();
    const pathes = getNavBranches(pathname);

    return (
        <Breadcrumb
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
            data-test-id='breadcrumbs'
            sx={{
                '& ol': {
                    flexWrap: 'wrap',
                },
            }}
        >
            {pathes.map((path, index) => {
                const isLast = index === pathes.length - 1;
                return (
                    <BreadcrumbItem key={index}>
                        {isLast ? (
                            <span style={{ color: 'black' }}>{path?.title}</span>
                        ) : (
                            <BreadcrumbLink
                                as={Link}
                                to={path?.redirect || path?.route}
                                color='blackAlpha.700'
                            >
                                {path?.title}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
export default BreadCrump;
