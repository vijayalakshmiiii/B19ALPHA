export class IBookList {
  bookId: number | undefined;
  title: string | undefined;
  author: string | undefined;
  category: string | undefined;
  price: number | undefined;
  coverFileName: string | undefined;
}

export class IShoppingCart {
  book: IBookList | undefined;
  quantity: number | undefined;
}

export class IOrder {
  orderDetails: IShoppingCart[] = [];
  cartTotal: number | undefined;
  orderId: string | undefined;
  orderDate: Date | undefined;
}
