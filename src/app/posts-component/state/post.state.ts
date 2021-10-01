export interface Post {
  id: number;
  post: string;
  title: string;
}

export interface PostState {
  posts: Post[];
}

export const postState: PostState = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 2,
      title: 'Post 2',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 3,
      title: 'Post 3',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 4,
      title: 'Post 4',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 5,
      title: 'Post 5',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 6,
      title: 'Post 6',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 7,
      title: 'Post 7',
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
  ],
};
