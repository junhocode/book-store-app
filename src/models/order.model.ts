export interface Order {
    id: number;
    createdAt: string;
    address: string;
    receiver: string;
    contact: string;
    bookTitle: string;
    totalQuantity: number;
    totalPrice: number;
  }
  
  export interface OrderSheet {
    items: number[];
    totalQuantity: number;
    totalPrice: number;
    firstBookTitle: string;
    delivery: Delivery;
  }
  
  export interface Delivery {
    address: string;
    receiver: string;
    contact: string;
  }
  
  export interface orderDetailItem {
    book_id: number;
    price: number;
    quantity: number;
    title: string;
    author: string;
  }
  
  export interface OrderListItem extends Order {
    detail?: orderDetailItem[];
  }