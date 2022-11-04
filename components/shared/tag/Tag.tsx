interface TagProps {
  name: string;
}

export const Tag = ({ name }: TagProps) => {
  return (
    <div className="min-w-[3.5rem] max-w-[7.5rem] truncate rounded-lg bg-brand-primary px-4 text-center text-brand-base">
      <span>{name}</span>
    </div>
  );
};
