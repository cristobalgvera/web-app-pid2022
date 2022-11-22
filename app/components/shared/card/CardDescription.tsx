interface CardDescriptionProps {
  title: string;
  description?: string;
}

export const CardDescription = ({ title, description }: CardDescriptionProps) => (
  <div>
    <h5 className="text-2xl font-bold tracking-tight line-clamp-2">{title}</h5>
    {description && <p className="font-normal text-slate-500 line-clamp-3">{description}</p>}
  </div>
);
