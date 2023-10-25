import React, {useState, useEffect} from "react";
import "./Jobs.css"
import JoblyApi from "./api";
import JobList from "./JobList"
import TextEntry from "./TextEntry";

const Jobs = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [jobData, setJobData] = useState([])

    // Get company data from fake API
    useEffect(() => {
        async function loadJobData() {
            const res = await JoblyApi.getJobs(searchTerm);
            setJobData(res);
        }
        loadJobData();
    }, [searchTerm])

    const handleChange = evt => {
        setSearchTerm(evt.target.value);
    };

    return (
        <div className="Jobs">
            {(jobData === null) ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    <div className="Jobs-searchbox">
                        <TextEntry textClass="Jobs-searchbox-text" updateText={handleChange} textType="text" textValue={searchTerm} placeholderText="Search for a job by title..." name="searchbox"/>
                    </div>
                    <JobList jobs={jobData}/>
                </>
                
            )}
        </div>
    );
}

export default Jobs;