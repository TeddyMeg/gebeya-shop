export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface CheckoutForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
  }