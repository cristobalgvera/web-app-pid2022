interface TextProps {
  children: React.ReactNode;
}

interface TitleProps extends TextProps {}
interface SubtitleProps extends TextProps {}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-center text-6xl font-bold">{children}</h1>;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="text-center text-4xl font-bold">{children}</h2>;
};
