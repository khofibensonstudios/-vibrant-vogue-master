import {
  LayoutDashboard,
  ShoppingBag,
  User2,
  ShoppingCart,
  Settings,
} from "lucide-react";
export const NavLinks = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "SHOP",
    to: "/shop",
  },
  {
    title: "GALLERY",
    to: "/gallery",
  },
  {
    title: "VLOG",
    to: "/vlog",
  },
  {
    title: "CONTACT US",
    to: "/contact",
  },
];

export const DashBoardLinks = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    to: "/admin",
  },

  {
    title: "Products",
    icon: ShoppingBag,
    to: "admin/products",
  },
  {
    title: "Customers",
    icon: User2,
    to: "admin/customers",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    to: "admin/orders",
  },
  {
    title: "Settings",
    icon: Settings,
    to: "admin/settings",
  },
];

export const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all items. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days within the US. International shipping may take 7-14 business days depending on the destination.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal and Apple Pay.",
  },
];

//  const photoshootImages: Image[] = [
//   {
//     id: 1,
//     src: "https://images.pexels.com/photos/2750174/pexels-photo-2750174.jpeg",
//     alt: "Photoshoot 1",
//     description: "Elegant pose with golden hour lighting",
//   },
//   {
//     id: 2,
//     src: "https://images.pexels.com/photos/19237705/pexels-photo-19237705/free-photo-of-a-black-and-white-photo-of-a-man-in-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600",
//     alt: "Photoshoot 2",
//     description: "Classic black & white portrait with sunglasses",
//   },
//   {
//     id: 3,
//     src: "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg",
//     alt: "Photoshoot 3",
//     description: "Creative fashion expression in outdoor scenery",
//   },
//   {
//     id: 4,
//     src: "https://images.pexels.com/photos/6786907/pexels-photo-6786907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     alt: "Photoshoot 4",
//     description: "Modern street-style shot with vibrant colors",
//   },
//   {
//     id: 5,
//     src: "https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg",
//     alt: "Photoshoot 5",
//     description: "Urban night photography with cinematic lighting",
//   },
//   {
//     id: 6,
//     src: "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg",
//     alt: "Photoshoot 6",
//     description: "Soft and dreamy aesthetic with blurred background",
//   },
// ];
