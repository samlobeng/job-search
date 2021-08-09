import { Card } from "react-bootstrap";

const Job = ({ job, changeJob, JobSelected }) => (
  <Card
    className={JobSelected?.id === job.id ? "border-thick mt-3" : "mt-3"}
    onClick={() => changeJob(job)}
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <div>
        <Card.Text className="font-weight-bold">{job.title}</Card.Text>
        <p>{job.company}</p>
        <p>{job.description}</p>
      </div>
    </Card.Body>
  </Card>
);

export default Job;