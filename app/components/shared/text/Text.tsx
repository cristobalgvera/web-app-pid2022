interface TextProps {
  children: React.ReactNode;
}

interface TitleProps extends TextProps {}
interface SubtitleProps extends TextProps {}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="mb-1 text-2xl font-bold sm:text-center md:text-3xl">{children}</h1>;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="text-xl font-bold sm:text-center md:text-2xl">{children}</h2>;
};
