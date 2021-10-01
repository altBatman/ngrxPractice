import { Post } from '../models/post.model';

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 2,
      title: 'Post 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 3,
      title: 'Post 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 4,
      title: 'Post 4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 5,
      title: 'Post 5',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 6,
      title: 'Post 6',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
    {
      id: 7,
      title: 'Post 7',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident dignissimos esse impedit eveniet nemo pariatur aliquid ab eaque doloremque.',
    },
  ],
};
