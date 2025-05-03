import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

import { getcurrentLocationState } from '~/redux/selectors';

const BreadCrump: React.FC<{
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ onClick }) => {
    const location = useSelector(getcurrentLocationState);

    const breadcrumbs = Object.entries(location);

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
            {breadcrumbs?.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const { label, route } = item[1];

                return (
                    <BreadcrumbItem key={index}>
                        {isLast ? (
                            <span style={{ color: 'black' }}>{label}</span>
                        ) : (
                            <BreadcrumbLink
                                onClick={onClick}
                                as={Link}
                                to={route}
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
