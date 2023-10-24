import React from "react";
import CompanyCard from "./CompanyCard";
import {v4 as uuidv4} from "uuid";
import "./CompanyList.css"

const CompanyList = ({companyData}) => {
    return (
        <div className="CompanyList">
            {companyData.map((companyInfo) => (
                <CompanyCard companyInfo={companyInfo} key={uuidv4()}/>
            ))}
        </div>
    )
}

export default CompanyList;