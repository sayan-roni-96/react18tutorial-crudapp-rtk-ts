import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WorkerDetails: React.FC = () => {
  const navigate = useNavigate();
  const { singleWorker } = useAppSelector((state) => state.worker);

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>{singleWorker.workername}</Card.Title>
          <Card.Text>
            Age: {singleWorker.age}<br/>
            Gender: {singleWorker.gender}<br/>
             Favourite Player:{singleWorker.favplayer}<br/>
            Performance:{singleWorker.performance}<br/>
            Interest:
            <ul>
                    {singleWorker.interest.map((interest, index) => (
                        <li key={index}>{interest.label}</li>
                    ))}
                    </ul>
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate("/workerlist")}>
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkerDetails;
