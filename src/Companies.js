import React, {useState, useEffect} from "react";
import "./Companies.css";
import CompanyList from "./CompanyList";
import JoblyApi from "./api";

const Companies = () => {
    // const [searchInput, setSearchInput] = useState("a");
    // const returnedCompanies = JoblyApi.getCompanies(searchInput);
    // console.log(returnedCompanies)

    // const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     setIsLoading(true);
    // })

    return (
        <div className="Companies">
            <CompanyList />
        </div>
    );
}

export default Companies;