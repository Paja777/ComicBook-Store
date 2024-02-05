

export interface NavLink {
    id: string;
    image?: string;
    name: "My account" | "favorite" | "search" | "bag" | "Login" | "Register";
    path: string
  }