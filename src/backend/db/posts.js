import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "India will win the Finals of WTC Test Championship, and be the first team to have all trophies.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivek18",
    createdAt: "5 June,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Big UCL Coming up on Sunday,will Pep get the treble?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivek18",
    createdAt: "1 June,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Steve Smith is very good in tests,different technique scoring all over the world.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vivek18",
    createdAt: "10 March,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life is very small to regret,travel more and enjoy.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mahesh10",
    createdAt: "5 May,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "BGMI is back and esports is gonna thrive in upcoming years , thanks to krafton and team.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mahesh10",
    createdAt: "11 January,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Watching FC Barcelona play live is the one of the things in my bucketlist.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mahesh10",
    createdAt: "16 March,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Learning React is so much fun, will learn javascript after react.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "saurabh45",
    createdAt: "29 May,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Which method of learning do you prefer ? Videos or documentation?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "saurabh45",
    createdAt: "22 January,2023",
    updatedAt: formatDate(),
  },
];
