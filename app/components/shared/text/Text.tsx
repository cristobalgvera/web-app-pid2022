interface TextProps {
  children: React.ReactNode;
}

interface TitleProps extends TextProps {}
interface SubtitleProps extends TextProps {}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="mb-4 text-center text-xl font-bold sm:text-2xl md:text-3xl">{children}</h1>;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="mb-2 text-center text-lg font-bold sm:text-xl md:text-2xl">{children}</h2>;
};
