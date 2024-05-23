interface GetOrdersRequest {
  query: {
    brand?: string;
    statusId?: number;
    offset?: number;
    limit?: number;
    sort?: string;
  };
}

type Paginated<T> = {
  total: number;
  pagination: {
    count: number;
    limit: number;
    offset: number;
  };
  sorting: {
    orderDirection: string;
    orderFieldName: string;
  };
  data: T[];
};

type GetOrdersResponse = Paginated<{
  id: string;
}>;

export default defineEventHandler<GetOrdersRequest, GetOrdersResponse>(
  (event) => {
    const params = getQuery(event);

    return {
      total: 0,
      pagination: {
        count: 0,
        limit: 0,
        offset: 0,
      },
      sorting: {
        orderDirection: 'ASC',
        orderFieldName: 'date',
      },
      data: [],
    };
  }
);
