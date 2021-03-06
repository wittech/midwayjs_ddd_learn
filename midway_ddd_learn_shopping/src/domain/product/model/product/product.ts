import { AggregateRoot } from '../../../../infrastructure/core/domain/aggregate-root';

export class Product extends AggregateRoot {
  constructor(
    productId?: string,
    productName?: string,
    price?: number,
    stock?: number
  ) {
    super();
    this.setProductId(productId);
    this.setProductName(productName);
    this.setPrice(price);
    this.setStock(stock);
  }

  private productId: string;
  public getProductId(): string {
    return this.productId;
  }
  public setProductId(v: string): void {
    this.productId = v;
  }

  private productName: string;
  public getProductName(): string {
    return this.productName;
  }
  public setProductName(v: string): void {
    this.productName = v;
  }

  private price: number;
  public getPrice(): number {
    return this.price;
  }
  public setPrice(v: number): void {
    this.price = v;
  }

  private stock: number;
  public getStock(): number {
    return this.stock;
  }
  public setStock(v: number): void {
    this.stock = v;
  }
}
