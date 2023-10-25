import React, {useState, useEffect} from "react";
import "./Companies.css";
import CompanyList from "./CompanyList";
import JoblyApi from "./api";
import TextEntry from "./TextEntry";

const Companies = () => {

    const [companyData, setCompanyData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = evt => {
        setSearchTerm(evt.target.value);
    };

    // Get company data from fake API
    useEffect(() => {
        async function loadCompanyData() {
            const res = await JoblyApi.getCompanies(searchTerm);
            setCompanyData(res);
        }
        loadCompanyData();
    }, [searchTerm])

    return (
        <div className="Companies">
            {(companyData === null) ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    <div className="Companies-searchbox">
                        <TextEntry textClass="Companies-searchbox-text" updateText={handleChange} textType="text" textValue={searchTerm} placeholderText="Search for a company by name..." name="searchbox"/>
                    </div>
                    <CompanyList companyData={companyData}/>
                </>
                
            )}
        </div>
    );
}

export default Companies;