import image1 from '../../assets/heart-svgrepo-com.svg';
import image2 from '../../assets/search-svgrepo-com.svg';
import image3 from '../../assets/bag-heart-svgrepo-com.svg';



export interface Link {
  image: string;
  name: "My account" | "favorite" | "search" | "bag";
}

export const products = [
    {
      id: 1,
      name: "Boots",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$100"
    },
    {
      id: 2,
      name: "Hat",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$25"
    },
    {
      id: 3,
      name: "Jacket",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$150"
    },
    {
      id: 4,
      name: "Gloves",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      price: "$20"
    },
    {
      id: 5,
      name: "Sunglasses",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      price: "$50"
    },
    {
      id: 6,
      name: "Backpack",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      price: "$80"
    },
    {
      id: 7,
      name: "Sneakers",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      price: "$120"
    },
    {
      id: 8,
      name: "Jeans",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$60"
    }
  ];

  export const navLinks : Link[] = [
    {
      image: '',
      name: 'My account'
    },
    {
      image: image1,
      name: 'favorite'
    },
    {
      image: image2,
      name: 'search'
    },
    {
      image: image3,
      name: 'bag'
    }
  ]