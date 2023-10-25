import React from "react";
import "./JobCard.css"

const JobCard = ({job}) => {

    return (
        <div className="JobCard">
            <h3 className="JobCard-title">{job.title}</h3>
            <p className="JobCard-description">{job.companyName}</p>
            <p className="JobCard-description">Salary: {job.salary}</p>
            <p className="JobCard-description">Equity: {job.equity}</p>
        </div>
    )
}

export default JobCard;