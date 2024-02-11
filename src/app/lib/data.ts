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
import graph1 from '../../assets/graph 1.webp'
import graph3 from '../../assets/graph 2.jpg'
import graph2 from '../../assets/graph 3.jpg'
import graph4 from '../../assets/graph 4.webp'
import graph5 from '../../assets/graph 5.jpg'
import graph6 from '../../assets/graph 6.jpg'
import graph7 from '../../assets/graph 7.jpg'
import manga1 from '../../assets/manga 1.jpg'
import manga2 from '../../assets/manga 2.jpg'
import manga3 from '../../assets/manga 3.webp'
import manga4 from '../../assets/manga 4.jpg'
import manga5 from '../../assets/manga 5.jpg'
import manga6 from '../../assets/manga 6.webp'
import manga7 from '../../assets/manga 7.jpg'
import SH1 from '../../assets/SH 1.jpg'
import SH2 from '../../assets/SH 2.webp'
import SH3 from '../../assets/SH 3.jpg'
import SH4 from '../../assets/SH 4.jpg'
import SH5 from '../../assets/SH 5.webp'
import SH6 from '../../assets/SH 6.jpg'
import SH7 from '../../assets/SH 7.webp'
import mailIcon from '../../assets/mailIcon.svg'
import paymentIcon from '../../assets/paymentIcon.svg'
import freeShippingIcon from '../../assets/freeShippingIcon.svg'
import returnIcon from '../../assets/returnIcon.svg'




export const products : Product[] = [
    {
      id: uuid(),
      title: "Wolverine",
      category: "superhero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$100",
      img: graph1
    },
    {
      id: uuid(),
      title: "Naruto",
      category: "manga",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$125",
      img: manga1
    },
    {
      id: uuid(),
      title: "Superman",
      category: "superhero",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$150",
      img: SH1
    },
    {
      id: uuid(),
      title: "Capitan America",
      category: "superhero",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      price: "$120",
      img: graph2
    },
    {
      id: uuid(),
      title: "One piece",
      category: "manga",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      price: "$150",
      img: manga2
    },
    {
      id: uuid(),
      title: "Iron Man",
      category: "superhero",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      price: "$180",
      img: SH2
    },
    {
      id: uuid(),
      title: "Capetan Marvel",
      category: "superhero",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      price: "$120",
      img: graph3
    },
    {
      id: uuid(),
      title: "Daredevil",
      category: "graphic_novel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: SH3
    },
    {
      id: uuid(),
      title: "Bleach",
      category: "manga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: manga3
    },
    {
      id: uuid(),
      title: "Spiderman",
      category: "graphic_novel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: graph4
    },
    {
      id: uuid(),
      title: "Spider-man",
      category: "superhero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: SH4
    },
    {
      id: uuid(),
      title: "Naruto",
      category: "manga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: manga4
    },{
      id: uuid(),
      title: "Sakamoto",
      category: "manga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: manga5
    },{
      id: uuid(),
      title: "Hulk",
      category: "graphic_novel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: graph5
    },{
      id: uuid(),
      title: "Avengers",
      category: "superhero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: SH5
    },{
      id: uuid(),
      title: "Rurouni",
      category: "manga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: manga6
    },
    {
      id: uuid(),
      title: "Ironman",
      category: "graphic_novel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: graph6
    },{
      id: uuid(),
      title: "Hulk",
      category: "superhero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: SH6
    },{
      id: uuid(),
      title: "Bleach",
      category: "manga",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: manga7
    },
    {
      id: uuid(),
      title: "Daredevil",
      category: "graphic_novel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: graph7
    },
    {
      id: uuid(),
      title: "X-men",
      category: "superhero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$160",
      img: SH7
    },
    
  ];

  export const navLinks : NavLink[] = [
    {
      id: uuid(),
      image: '',
      name: 'My account',
      path: ''
    },
    {
      id: uuid(),
      image: image1,
      name: 'favorite',
      path: 'favorite'
    },
    {
      id: uuid(),
      image: image2,
      name: 'search',
      path: ''
    },
    {
      id: uuid(),
      image: image3,
      name: 'bag',
      path: 'cart'
    }
  ]

  export const categories : Category[]= [
   {
    id: uuid(),
    name: 'superhero',
    image: superman
   },
   {
    id: uuid(),
    name: 'manga',
    image: onepiece
   },
   {
    id: uuid(),
    name: 'graphic_novel',
    image: wolf
   }
  ]

export const footerData = [
  {
    title: 'Return',
    description: '14 day return',
    image: returnIcon
  },
  {
    title: 'Free Shipping',
    description: 'Shipping is on us for every order over $100',
    image: freeShippingIcon
  },
  {
    title: 'Flexible Payment Options',
    description: 'Buy now pay later',
    image: paymentIcon
  },
  {
    title: 'Ask Us',
    description: 'We will receive Your Mails and respond in shortest notice',
    image: mailIcon
  },
]