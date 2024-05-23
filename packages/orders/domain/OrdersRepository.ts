import type { Order } from './Order';
import type { Pagination, Paginated, SortData } from '@@/packages/shared';

export type GetOrdersParams = {
  pagination: Pagination;
  sort?: SortData[];
  brand?: string;
  statusId?: number;
};
export type getOrders = (params: GetOrdersParams) => Promise<Paginated<Order>>;

export type OrderRepository = {
  getOrders: getOrders
}
