import React from "react";
import "./Question.css";
import Avatar from "../Avatar/Avatar.jsx";
import { Link } from "react-router-dom";
import { timeAgo } from "../../helper.js";
import { toFormData } from "axios";

const Question = ({ question }) => {
  return (
    <div className="flex items-baseline mb-4">
      <div className="w-2/12 h-full flex-col py-4 justify-items-end ">
        <p className="question-properties">{question.upvote-question.downvote} votes</p>
        <p className="question-properties">{question.answers.length} answers</p>
        <p className="question-properties">{question.views} views</p>
      </div>
      <div className="w-11/12  p-4">
        <Link
          to={`/Question/${question.id}`}
          className="text-blue-500 font-medium"
        >
          {question.title}
        </Link>
        <div className="flex items-center text-xs text-gray-600 mt-1">
          {question.posttags.map((Tag) => (
            <span className="question-tags">{Tag.tag.tagname}</span>
          ))}

          <span className="ml-auto">
            <img
              src={question.user.gravatar}
              alt="avatar"
              className="mr-2 relative inline-block size-6 !rounded-full object-cover object-center"
            />
            {question.user.username}
            <span className="text-gray-400 ml-2">asked on {timeAgo(question.createdAt)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Question;
