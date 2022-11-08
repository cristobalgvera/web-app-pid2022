export type NextLayoutProps = {
  children: React.ReactNode;
};

export type NextTemplateProps = NextLayoutProps;

export type NextPageProps<T extends { [slug: string]: string } = {}> = {
  params: T;
  searchParams: {
    [id: string]: string;
  };
};

export type NextErrorPageProps = {
  error: Error;
  reset: () => void;
};
