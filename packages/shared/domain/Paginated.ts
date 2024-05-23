import type { Pagination } from './Pagination';

export interface Paginated<T> {
  data: T;
  pagination: Pagination;
}
