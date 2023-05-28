import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-3xl font-bold sm:text-5xl xl:text-4xl">Calculadora</h1>
    </Link>
  );
};
