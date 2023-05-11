import React from "react";
import { ListItem, RepoName, RepoLogo } from "../styles/index.js";
import starIcon from "../assets/star.svg";
import watchersIcon from "../assets/watchers.svg";

const ListItemComponent = (props) => {
  const {
    name,
    stargazers_count: stars,
    watchers,
    owner: { login: author, avatar_url: logo },
    language,
    description,
  } = props.item;
  return (
    <ListItem>
      <div className="body">
        <RepoLogo>
          <img src={logo} alt="author_avatar" />
        </RepoLogo>
        <div className="content">
          <RepoName>{name}</RepoName>
          <div className="details">
            <div className="author">
              <span>Author: </span>
              <span>{author}</span>
            </div>
            <div className="language">
              <span>Language: </span>
              <span>{language}</span>
            </div>
            <div className="description">
              <span>Description: </span>
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="metadata">
        <span className="spacer"></span>
        <div className="item stars">
          <span className="icon">
            <img src={starIcon} alt="star_icon" />
          </span>
          {stars} <span className="label">stars</span>
        </div>
        <div className="item watchers">
          <span className="icon">
            <img src={watchersIcon} alt="star_icon" />
          </span>
          {watchers} watchers
        </div>
      </div>
    </ListItem>
  );
};

export default React.memo(ListItemComponent);
