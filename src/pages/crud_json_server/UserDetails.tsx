import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const { singleUser } = useAppSelector((state) => state.user);

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>{singleUser.username}</Card.Title>
          <Card.Text>
            Email: {singleUser.email}
            Phone: {singleUser.phone}
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
