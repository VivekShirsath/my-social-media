import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Vivek",
    lastName: "Shirsath",
    username: "vivek18",
    password: "vivek123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imageId : "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
    followers: [{
      _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    }],
    following: [{
     _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    }]
  },
  {
    _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    password: "maheshjog",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imageId : "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
  },
  {
    _id: 3,
    firstName: "Saurabh",
    lastName: "Chaudhary",
    username: "saurabh45",
    password: "saurabh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imageId : "https://cdn-icons-png.flaticon.com/128/924/924874.png",
  },
  {
    _id: 4,
    firstName: "Sara",
    lastName: "Williams",
    username: "sara22",
    password: "sara@11",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imageId : "https://cdn-icons-png.flaticon.com/128/4140/4140051.png",
  },
];
