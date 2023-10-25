import React from "react";
import {v4 as uuidv4} from "uuid";
import JobCard from "./JobCard";

const JobList = ({jobs}) => {

    return (
        <div className="JobList">
            {jobs.map((job) => (
                <JobCard job={job} key={uuidv4()}/>
            ))}

        </div>
    )
}

export default JobList;