export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  location: string;
  imageSeed: string; // used to generate a stable placeholder image
}