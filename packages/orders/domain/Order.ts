export interface Order {
  orderId: string;
  orderIdEdicom?: string;
  brand?: string;
  providerCode: string;
  orderType?: boolean;
  sendDate?: string;
  statusId: number;
  bugList?: string;
  poolUser?: string;
}
