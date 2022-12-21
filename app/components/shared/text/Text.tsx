interface TextProps {
  children: React.ReactNode;
}

interface TitleProps extends TextProps {}
interface SubtitleProps extends TextProps {}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="mb-1 text-3xl font-bold sm:text-center">{children}</h1>;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="text-2xl font-bold sm:text-center">{children}</h2>;
};
