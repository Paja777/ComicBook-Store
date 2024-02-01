import image1 from '../../assets/heart-svgrepo-com.svg';
import image2 from '../../assets/search-svgrepo-com.svg';
import image3 from '../../assets/bag-heart-svgrepo-com.svg';
import superman from '../../assets/superman.svg'
import onepiece from '../../assets/onepiece.svg'
import wolf from '../../assets/wolf.svg'
import uuid from 'react-uuid';
import { NavLink } from '../models/navlink';
import { Category } from '../models/category';
import { Product } from '../models/product';





export const products : Product[] = [
    {
      id: uuid(),
      title: "Boots",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$100"
    },
    {
      id: uuid(),
      title: "Hat",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$25"
    },
    {
      id: uuid(),
      title: "Jacket",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$150"
    },
    {
      id: uuid(),
      title: "Gloves",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      price: "$20"
    },
    {
      id: uuid(),
      title: "Sunglasses",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      price: "$50"
    },
    {
      id: uuid(),
      title: "Backpack",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      price: "$80"
    },
    {
      id: uuid(),
      title: "Sneakers",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      price: "$120"
    },
    {
      id: uuid(),
      title: "Jeans",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$60"
    }
  ];

  export const navLinks : NavLink[] = [
    {
      id: uuid(),
      image: '',
      name: 'My account'
    },
    {
      id: uuid(),
      image: image1,
      name: 'favorite'
    },
    {
      id: uuid(),
      image: image2,
      name: 'search'
    },
    {
      id: uuid(),
      image: image3,
      name: 'bag'
    }
  ]

  export const categories : Category[]= [
   {
    id: uuid(),
    name: 'Superhero Comics',
    image: superman
   },
   {
    id: uuid(),
    name: 'Manga',
    image: onepiece
   },
   {
    id: uuid(),
    name: 'Graphic Novels',
    image: wolf
   }
  ]