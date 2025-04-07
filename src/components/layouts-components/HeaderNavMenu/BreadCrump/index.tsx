import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

import { routeFinder } from '~/configs/navigationConfig';
import { usePathnames } from '~/utils';

const BreadCrump: React.FC = () => {
    const pathnames = usePathnames();

    return (
        <Breadcrumb
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
        >
            {pathnames.map((_, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const branch = routeFinder(routeTo);

                return (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink
                            color={isLast ? 'black' : `black.alpha700`}
                            href={isLast ? '#' : routeTo}
                        >
                            {branch?.title}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
export default BreadCrump;
