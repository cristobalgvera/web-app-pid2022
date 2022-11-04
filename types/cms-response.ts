interface AuditData {
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

interface PaginationData {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

type ItemAttributes<T> = Partial<T> & AuditData;

interface Item<T> {
  id: number;
  attributes: ItemAttributes<T>;
}

export interface CMSResponse<T, Type extends "single" | "multi" = "multi"> {
  data: Type extends "multi" ? Item<T>[] : Item<T>;
  meta: Type extends "multi"
    ? {
        pagination?: PaginationData;
      }
    : {};
}
