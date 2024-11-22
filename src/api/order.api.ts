import { Order, orderDetailItem, OrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

export const order = async (orderData: OrderSheet) => {
  return await requestHandler("post", "/orders", orderData);
}

export const fetchOrders = async () => {
  const response = await httpClient.get<Order[]>("/orders");
  return response.data;
}

export const fetchOrder = async (orderId: number) => {
  const response = await httpClient.get<orderDetailItem[]>(`/orders/${orderId}`);
  return response.data;
}