export interface BlogType {
  _id: string;
  type: string;
}

export interface Category {
  _id: string;
  categoryName: string;
}

export interface Stack {
  _id: string;
  name: string;
}

export interface Department {
  _id: string;
  name: string;
}

export interface StatCard {
  label: string;
  value: number | string;
  icon: string;
  bg: string;
  color: string;
}
