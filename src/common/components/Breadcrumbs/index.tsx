import { useRouter } from 'next/router';

import { Link } from 'common/components';

export const Breadcrumbs = () => {
  const { breadcrumbs } = useCreateBreadcrumbs();

  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <Breadcrumb
          key={breadcrumb.text}
          text={breadcrumb.text}
          href={breadcrumb.href}
          isFirst={index === 0}
          isLast={index === breadcrumbs.length - 1}
        />
      ))}
    </div>
  );
};

type BreadcrumbProps = {
  text: string;
  href: string;
  isFirst: boolean;
  isLast: boolean;
};

const Breadcrumb = ({ text, href, isFirst = false, isLast = false }: BreadcrumbProps) => {
  if (isFirst) {
    return <Link href={href}>{text}</Link>;
  }
  if (isLast) {
    return <span> / {text}</span>;
  }
  return (
    <>
      {' '}
      / <Link href={href}>{text}</Link>
    </>
  );
};

const useCreateBreadcrumbs = (): { breadcrumbs: ReadonlyArray<{ href: string; text: string }> } => {
  const router = useRouter();

  const pathName = router.asPath;
  const pathNames = pathName.split('/').filter((pathNameSplitted) => pathNameSplitted.length > 0);

  const breadcrumbs = pathNames.map((pathName, index) => {
    const href = '/' + pathNames.slice(0, index + 1).join('/');
    return { href, text: pathName };
  });

  return { breadcrumbs: [{ href: '/', text: 'Home' }, ...breadcrumbs] };
};
