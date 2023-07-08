export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  date: number;
  image?: string;
  category: string;
  special: boolean;
}
