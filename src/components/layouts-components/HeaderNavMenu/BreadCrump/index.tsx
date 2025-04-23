import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { getNavBranches } from '~/configs/navigationConfig';
import mockRespone from '~/data/data.json';
import { RecipeProps } from '~/types';

const BreadCrump: React.FC = () => {
    const { pathname } = useLocation();
    const pathes = getNavBranches(pathname);
    const pahnames = pathname.split('/');

    if (pahnames.length === 4) {
        const data = JSON.parse(JSON.stringify(mockRespone));
        const recieptName = data.find((e: RecipeProps) => e.id === pahnames[3]);
        if (recieptName) {
            pathes.push(recieptName);
        }
    }
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
