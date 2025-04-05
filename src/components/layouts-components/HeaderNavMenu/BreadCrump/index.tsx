import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router';
// import { navTree } from '~/configs/navigationConfig';

const BreadCrump: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    !pathnames.length && pathnames.push();

    return (
        <Breadcrumb
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
        >
            {pathnames.map((path, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink
                            color={isLast ? 'black' : `black.alpha700`}
                            href={isLast ? '#' : routeTo}
                        >
                            {path}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
export default BreadCrump;
