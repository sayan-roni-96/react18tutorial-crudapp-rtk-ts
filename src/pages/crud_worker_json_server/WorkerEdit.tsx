import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { WorkerModel } from "../../redux/models/workerModel";
import { EditSingleWorker } from "../../redux/actions/workerAction";

type newWorkerEditType = {
    workerEName: string;
    workerEAge: string;
    workerEfavPlayer: string;
    workerEStatus: boolean;
};

const WorkerEdit = () => {
  const { eid } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [workerEditState, setWorkerEditState] = useState<newWorkerEditType>({
    workerEName: state.workerDatas.workername || "",
    workerEAge: state.workerDatas.age || "",
    workerEfavPlayer: state.workerDatas.favplayer || "",
    workerEStatus: state.workerDatas.active || false,
  });
//synthetic event
  const editStudentSubmit = (e: any) => {
    e.preventDefault();

    if (
      !workerEditState.workerEName ||
      !workerEditState.workerEAge ||
      !workerEditState.workerEfavPlayer
    ) {
      toast.error("Please all the fields!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const inFormData: WorkerModel = {
        workername: workerEditState.workerEName,
        age: workerEditState.workerEAge,
        favplayer: workerEditState.workerEfavPlayer,
        active: workerEditState.workerEStatus,
      };
      dispatch(EditSingleWorker({ eid: eid, formEdData: inFormData }))
        .then((res: any) => {
          console.log("add-res=>", res);
          if (res.type === "worker/edit/fulfilled") {
            toast.success("worker has been updated!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setWorkerEditState({
                workerEName: "",
                workerEAge: "",
                workerEfavPlayer: "",
                workerEStatus: false,
            });
            navigate("/workerlist");
          } else {
            toast.error("Something went wrong!!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
        .catch((err: any) => {
          console.log("add-err=>", err);
        });
    }
  };

  return (
    <Form onSubmit={(e) => editStudentSubmit(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Worker name</Form.Label>
          <Form.Control
            value={workerEditState.workerEName}
            onChange={(e) =>
                setWorkerEditState({
                ...workerEditState,
                workerEName: e.target.value,
              })
            }
            type="text"
            placeholder="Worker name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Age</Form.Label>
          <InputGroup>
            {/* <InputGroup.Text>@</InputGroup.Text> */}
            <Form.Control
              value={workerEditState.workerEAge}
              onChange={(e) =>
                setWorkerEditState({
                  ...workerEditState,
                  workerEAge: e.target.value,
                })
              }
              type="text"
              placeholder="Age"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Fav Player</Form.Label>
          <Form.Control
            value={workerEditState.workerEfavPlayer}
            onChange={(e) =>
                setWorkerEditState({
                ...workerEditState,
                workerEfavPlayer: e.target.value,
              })
            }
            type="text"
            placeholder="Fav Player"
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          label="Student Status"
          checked={workerEditState.workerEStatus}
          onChange={(e) =>
            setWorkerEditState({
              ...workerEditState,
              workerEStatus: e.target.checked,
            })
          }
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default WorkerEdit;
