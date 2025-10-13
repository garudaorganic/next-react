export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  compare_at_price?: number;
  sku: string;
  stock_quantity: number;
  category_id: string;
  is_featured: boolean;
  is_best_seller: boolean;
  rating: number;
  review_count: number;
  nutritional_info?: Record<string, string>;
  ingredients?: string;
  images: ProductImage[];
  category?: Category;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string;
  display_order: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: string;
  display_order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  category: string;
  tags: string[];
  published_at: string;
}

export interface Review {
  id: string;
  product_id: string;
  customer_name: string;
  rating: number;
  title?: string;
  comment: string;
  verified_purchase: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  customer_image?: string;
  rating: number;
  comment: string;
  location?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}
