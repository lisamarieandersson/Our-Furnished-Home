export interface Product {
  id: string;
  image: string;
  title: string;
  brand: string;
  designer: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/**
 * function that returns a unique Id, both numbers and letters
 */
export const generateId = () => {
  const newId = Math.floor(1 + Math.random() * 0x1000)
    .toString(16)
    .substring(1);
  return newId;
};

export const products: Product[] = [
  {
    image: "/assets/new-works-tea-shelf.png",
    brand: "New Works",
    designer: "Knut Bendik Humlevik",
    title: "Tea Shelf",
    description:
      "The New Works Tea Shelf can be used anywhere in the home for storage and display of small items. The shelves are neatly assembled with flat knurled screws in stainless steel, adding an honest yet refined detail to the design. ",
    price: 2300,
    id: "e1",
  },
  {
    image: "/assets/ch24-chair-beech-clay.png",
    brand: "Carl Hansen & Søn",
    designer: "Hans J. Wegner & Ilse Crawford",
    title: "CH24 Wishbone Chair",
    description:
      "To celebrate more than 70 years of collaboration between Carl Hansen & Søn and Hans J. Wegner, designer Ilse Crawford reinterprets the CH24 Wishbone Chair in a palette of nine soft yet complex colors.",
    price: 6065,
    id: "d2",
  },
  {
    image: "/assets/cestita-alubat.png",
    brand: "Santa & Cole",
    designer: "Miguel Milá",
    title: "Cestita Alubat Lamp",
    description:
      "Cestita Alubat is the latest addition to the Cesta family. Robust yet lightweight, this version is ready for action indoors and out. Its aluminium structure, with a closed plastic balloon for better sealing and a rechargeable battery, is distinguished by its sobriety.",
    price: 2299,
    id: "c1",
  },
  {
    image: "/assets/new-works-coffee-table",
    brand: "New Works",
    designer: "New Works Studio",
    title: "Florence Coffee Table",
    description:
      "The Florence Coffee Table is a stylish coffee table from New Works, designed by New Works Studio and is part of the Florence collection. The table top measures 90 cm in diameter, where its round shape together with the angular base creates an appealing aesthetic.",
    price: 11995,
    id: "f4",
  },
  {
    image:
      "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1503126-03_Fm_M0037108&mw=1500&fmt=webp",
    brand: "New Works",
    designer: "",
    title: "Bella",
    description:
      "Upholstered headboard attached to the wall (two hooks on the back). Wooden frame (pine). Upholstery in velvet of polyester and filling of polyether. Width 95 cm. Height 61.5 cm. Depth 7.5 cm.",
    price: 999,
    id: "e6",
  },
  {
    image:
      "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1664039-01_Fm_M0059479&mw=1500&fmt=webp",
    brand: "New Works",
    designer: "",
    title: "Essentials",
    description:
      "Side table / cabinet in solid mango wood with wax-treated surface. Two doors with wooden handles and soft closing. The cabinet is divided inside and has a fixed shelf. Dimensions between shelves approx. 27 cm. Clear height under furniture 14 cm. Delivered assembled.",
    price: 5499,
    id: "a3",
  },
];
