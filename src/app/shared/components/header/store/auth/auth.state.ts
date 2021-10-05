export interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const userState: User = {
  userId: 1,
  id: 1,
  title: '',
  completed: false,
};
