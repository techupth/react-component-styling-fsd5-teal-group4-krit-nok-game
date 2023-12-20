/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    if(props.type === "primary"){
        return(
            <button css={css`
                font: Sarabun;
                font-size: 8px;
                font-weight: 400;
                border-radius: 4px;
                background-color: #074EE8;
                width: 171.19px;
                height: 50px;
        `}>
            <h2>{props.text}</h2>
        </button>
        );
    } else if (props.type === "secondary") {
        return (
            <button css={css`
                font: Sarabun;
                font-size: 8px;
                font-weight: 400;
                border-radius: 4px;
                background-color: #07A4E8;
                width: 171.19px;
                height: 50px;
                margin-top: 20px;
        `}>
            <h2>{props.text}</h2>
        </button>
        );
    }
    
    return (
        <button>{props.text}</button>
    )
}

export default Button;