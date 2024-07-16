import React from "react";
import userIcon from "../assets/user-icon.png";
const commentsData = [
  {
    name: "Deepak",
    text: "Lorem ipsum dolor sit amet, consectetur adip incidid.",
    replies: [
      {
        name: "Rajesh",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Priya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Tanisha",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nidhi",
    text: "Lorem ipsum dolor sit amet, consectetur adip incidid.",
    replies: [
      {
        name: "Ravi",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [],
      },
      {
        name: "Ajay",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Chandan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-2 items-center px-3 py-2 m-2 bg-[#212121] shadow-md rounded-md">
      <img className="h-10 rounded-full" src={userIcon} />
      <div>
        <h3 className="font-medium">{name}</h3>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div>
      <Comment data={comment} key={i} />
      <div className="ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
