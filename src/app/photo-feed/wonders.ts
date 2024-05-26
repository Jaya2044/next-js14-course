import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const WonderImages: WonderImage[] = [
  {
    id: "1",
    name: "Prabhas",
    src: photo1,
    photographer: "Photo by youtube",
    location: "india",
  },
  {
    id: "3",
    name: "Mahesh Babu",
    src: photo3,
    photographer: "Photo by Great Andhra",
    location: "india",
  },
  {
    id: "4",
    name: "Akhil",
    src: photo4,
    photographer: "Photo by Sai Rachana",
    location: "india",
  },
  {
    id: "5",
    name: "Jr. NTR",
    src: photo5,
    photographer: "Photo by Jaya",
    location: "india",
  },
  {
    id: "6",
    name: "Gopichand",
    src: photo6,
    photographer: "Photo by Instagram",
    location: "india",
  },
  {
    id: "7",
    name: "Ram Charan",
    src: photo7,
    photographer: "Photo by Facebook",
    location: "india",
  },
];

export default WonderImages;