// REACT
import React from "react";

// BOOTSTRAP
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const ProblemCard = ({ problem }) => {
  // TAGS (DP ETC.) FOR CARD
  const renderTags = (tags) =>
    tags.map((tag, index) => (
      <Badge className="bg-warning text-black p-2 m-1" key={index}>
        {tag}
      </Badge>
    ));

  // SHOW DIFICULTY FOR CARD
  const renderDifficulty = (difficulty) => {
    let color = "";

    switch (difficulty) {
      case "easy":
        color = "text-success";
        break;
      case "medium":
        color = "text-info";
        break;
      default:
        color = "text-danger";
        break;
    }

    return (
      <span className={`d-block mt-3 ${color} font-weight-bold`}>
        {difficulty}
      </span>
    );
  };

  // CARD FOR EACH PROBLEM
  return (
    <Card className="mt-5 p-0">
      <a href={problem.editorialLink} target="blank">
        <Card.Header className="bg-warning text-black">
          {problem.name}
        </Card.Header>
      </a>

      <Card.Body>
        <span className="d-block mt-3">{problem.platform}</span>
        <span className="d-block mt-3">{problem.contest}</span>
        {renderDifficulty(problem.difficulty)}
      </Card.Body>
      <Card.Footer>{renderTags(problem.tags)}</Card.Footer>
    </Card>
  );
};

export default ProblemCard;
