import { TutorialCard } from "@components/tutorials";
import { getAllTutorials } from "@graphql/actions";
import { request } from "@graphql/util";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "./util";

export enum TutorialKeys {
  GET_ALL = "tutorials",
}

export const useTutorials = (): ApiResponse<ReadonlyArray<TutorialCard>> => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [TutorialKeys.GET_ALL],
    queryFn: () => request(getAllTutorials, { pagination: { pageSize: 1 } }),
  });

  return {
    data:
      data?.tutorials?.data.map((tutorial) => ({
        id: tutorial.id ?? "",
        title: tutorial.attributes?.title ?? "",
        cover: {
          src: process.env.NEXT_PUBLIC_CMS_BASE_URL! + (tutorial.attributes?.cover?.data?.attributes?.url ?? ""),
          alt: tutorial.attributes?.cover?.data?.attributes?.alternativeText ?? "",
        },
        categories:
          tutorial.attributes?.categories?.data.map((category) => category.attributes?.name ?? "").filter(Boolean) ??
          [],
        summary: tutorial.attributes?.summary ?? "",
      })) ?? [],
    isLoading,
    isError,
  };
};
