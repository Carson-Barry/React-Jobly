import React from "react";

const TextEntry = ({updateText, textType, textValue, placeholderText, textClass}) => {

    return (
        <div className="TextEntry">
            <input className={textClass} type={textType} value={textValue} placeholder={placeholderText} onChange={updateText}/>
        </div>
    )
}

export default TextEntry;