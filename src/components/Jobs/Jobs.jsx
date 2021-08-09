
import JobList from './JobList'
import JobDetails from './JobDetails'
import React, { Component } from 'react'
import { Col, Row } from "react-bootstrap";

class Jobs extends Component {
state = {
    jobs: [{}],
    jobSelected: null,
}

componentDidMount = async ()=> {
    try {
        let response = await fetch ("https://remotive.io/api/remote-jobs?limit=1")
        if(response.ok){
            let jobs = await response.json()
            console.log(jobs)
            this.setState({jobs})
        }
    } catch (error) {
        console.log("error")
    }

}

changeJob = (job) => this.setState({ jobSelected: job });

    render() {
        return (
            <Row>
        <Col md={4}>
          <JobList
            jobSelected={this.state.jobSelected}
            changeJob={this.changeJob}
            jobs={this.state.jobs}
          />
        </Col>
        <Col md={8}>
          <JobDetails
            jobSelected={this.state.jobSelected}
          />
        </Col>
      </Row>
    )
    }
}

export default Jobs;