import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface BreadcrumbItemData {
  path: string;
  label: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItemData[] }) => {
  if (!items || items.length === 0) return null;

  return (
    <Breadcrumb separator=">" fontSize='16px' fontWeight="400" color="dark_grey" mb={4}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <BreadcrumbItem key={index} isCurrentPage={isLast}>
            {!isLast ? (
              <BreadcrumbLink as={RouterLink} to={item.path} color="dark_grey">
                {item.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbLink color="dark_grey" cursor="default">
                {item.label}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export { Breadcrumbs };



