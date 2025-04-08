import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

import { routeFinder } from '~/configs/navigationConfig';
import { usePathnames } from '~/utils';

const BreadCrump: React.FC = () => {
    const pathnames = usePathnames();
    console.log(pathnames);
    return (
        <Breadcrumb
            alignItems='center'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='md'
        >
            {pathnames.map((path, index) => {
                // const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const branch = routeFinder(path);

                return (
                    <BreadcrumbItem key={index}>
                        {isLast ? (
                            <span style={{ color: 'black' }}>{branch?.title}</span>
                        ) : (
                            <BreadcrumbLink as={Link} to={path} color='blackAlpha.700'>
                                {branch?.title}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
export default BreadCrump;
