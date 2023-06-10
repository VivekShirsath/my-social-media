import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "Shirsath",
    username: "vivek18",
    password: "vivek123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    password: "maheshjog",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Saurabh",
    lastName: "Chaudhary",
    username: "saurabh45",
    password: "saurabh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
