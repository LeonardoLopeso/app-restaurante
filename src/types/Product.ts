export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: any;
  price: number;
  ingredients: {
      name: string;
      icon: string;
      _id: string;
  }[];
}
