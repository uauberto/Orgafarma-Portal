export enum UserRole {
  VISITOR = 'VISITOR',
  PHARMACY = 'PHARMACY',
  ADMIN = 'ADMIN'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
