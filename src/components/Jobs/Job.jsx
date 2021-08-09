import { Card } from "react-bootstrap";

const Job = ({ job, changeJob, JobSelected }) => (
  <Card
    className={JobSelected?.id === job.id ? "border-thick mt-3" : "mt-3"}
    onClick={() => changeJob(job)}
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <div>
      <img className="job-image" src={job.company_logo_url} alt="book cover" />
        <Card.Text className="font-weight-bold">{job.title}</Card.Text>
        <p>{job.company}</p>
        <p>Category: {job.category}</p>
        <p>Category: {job.job_type}</p>
        <p>Salary: {job.salary}</p>
        <p>Date: {job.publication_date}</p>
        <br></br>
        <a href={`${job.url}`}>Apply here:</a>
      </div>
    </Card.Body>
  </Card>
);

export default Job;