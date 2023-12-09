import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AddWorkerModel, WorkerModel } from "../../../redux/models/workerModel";
import { useAppDispatch } from "../../../redux/hooks";
import { addNewWorker } from "../../../redux/actions/workerAction";

type workerAddType = {
  workerName: string;
  workerAge: string;
  workerfavPlayer: string;
  workerStatus: boolean;
};

const WorkerAdd = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [workerAddState, setWorkerAddState] = useState<workerAddType>({
    workerName: "",
    workerAge: "",
    workerfavPlayer: "",
    workerStatus: false,
  });
  const studentAddSubmit = (e: any) => {
    e.preventDefault();

    if (
      !workerAddState.workerName ||
      !workerAddState.workerAge ||
      !workerAddState.workerfavPlayer
    ) {
      toast.error("Please fill all the fields!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const newFormData: AddWorkerModel = {
        workername: workerAddState.workerName,
        age: workerAddState.workerAge,
        favplayer: workerAddState.workerfavPlayer,
        active: workerAddState.workerStatus,
        id: Date.now(),
      };
      dispatch(addNewWorker({ formData: newFormData }))
        .then((resp: any) => {
          console.log("add-resp=>", resp);

          toast.success("New Worker has been added!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          if (resp.type === "worker/add/fulfilled") {
            navigate("/workerlist");
          }
        })
        .catch((err: any) => {
          console.log("add-err=>", err);
        });
    }
  };
  return (
    <Form onSubmit={(e) => studentAddSubmit(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Worker name</Form.Label>
          <Form.Control
            value={workerAddState.workerName}
            onChange={(e) =>
                setWorkerAddState({
                ...workerAddState,
                workerName: e.target.value,
              })
            }
            type="text"
            placeholder="Student name"
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Age</Form.Label>
          <InputGroup>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              value={workerAddState.workerAge}
              onChange={(e) =>
                setWorkerAddState({
                  ...workerAddState,
                  workerAge: e.target.value,
                })
              }
              type="text"
              placeholder="Email"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Fav Player</Form.Label>
          <Form.Control
            value={workerAddState.workerfavPlayer}
            onChange={(e) =>
                setWorkerAddState({
                ...workerAddState,
                workerfavPlayer: e.target.value,
              })
            }
            type="text"
            placeholder="Phone"
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          label="Active"
          checked={workerAddState.workerStatus}
          onChange={(e) =>
            setWorkerAddState({
              ...workerAddState,
              workerStatus: e.target.checked,
            })
          }
        />
      </Form.Group>
      <Button type="submit">Submit </Button>
    </Form>
  );
};

export default WorkerAdd;

