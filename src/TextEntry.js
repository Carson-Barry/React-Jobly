import React from "react";

const TextEntry = ({updateText, textType, textValue, placeholderText, textClass, name}) => {

    return (
        <div className="TextEntry">
            <input className={textClass} type={textType} value={textValue} placeholder={placeholderText} onChange={updateText} name={name}/>
        </div>
    )
}

export default TextEntry;