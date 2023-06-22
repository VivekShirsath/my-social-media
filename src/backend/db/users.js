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
    bio : "Hello Everyone",
    github : "https://github.com/VivekShirsath",
    imageId : "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
    bookmarks: [],
    followers: [{
      _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    }
    ,
    {
      _id: 4,
      firstName: "Sara",
      lastName: "Williams",
      username: "sara22",
    }],
    following: [{
     _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    }],
  },
  {
    _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    password: "maheshjog",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "WanderLust",
    github : "https://mahesh",
    imageId : "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
    bookmarks: [],
    followers: [{
      _id: 1,
    firstName: "Vivek",
    lastName: "Shirsath",
    username: "vivek18",
    }],
    following: [{
      _id: 1,
    firstName: "Vivek",
    lastName: "Shirsath",
    username: "vivek18",
    },
    {
      _id: 3,
      firstName: "Saurabh",
      lastName: "Chaudhary",
      username: "saurabh45",
    }
  ],
  },
  {
    _id: 3,
    firstName: "Saurabh",
    lastName: "Chaudhary",
    username: "saurabh45",
    password: "saurabh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "Juggling with life",
    github : "https://saurabh",
    imageId : "https://cdn-icons-png.flaticon.com/128/924/924874.png",
    bookmarks: [],
    followers: [{
      _id: 2,
    firstName: "Mahesh",
    lastName: "Jogdand",
    username: "mahesh10",
    }],
    following: [{
      _id: 4,
    firstName: "Sara",
    lastName: "Williams",
    username: "sara22",
    }],

  },
  {
    _id: 4,
    firstName: "Sara",
    lastName: "Williams",
    username: "sara22",
    password: "sara@11",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio : "Hello Fam",
    github : "https://sara",
    imageId : "https://cdn-icons-png.flaticon.com/128/4140/4140051.png",
    bookmarks: [],
    followers: [{
      _id: 3,
      firstName: "Saurabh",
      lastName: "Chaudhary",
      username: "saurabh45",
    }],
    following:[{
      _id: 1,
      firstName: "Vivek",
      lastName: "Shirsath",
      username: "vivek18",
    }]
  },
];
