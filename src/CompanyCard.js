import React from "react";
import "./CompanyCard.css"

const CompanyCard = ({companyInfo}) => {
    return (
        <div className="CompanyCard">
            <h3 className="CompanyCard-title">{companyInfo.name}</h3>
            <p className="CompanyCard-description">{companyInfo.description}</p>
        </div>
    )
}

export default CompanyCard;