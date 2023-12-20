/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import frown from './icon/frown.svg'
import alert from './icon/alert-triangle.svg'
import circle from './icon/alert-circle.svg'
import check from './icon/check-circle.svg'

function Alert(props) {
    if(props.type === "error"){
        return(
            <div css={css`
                font: Kanit;
                font-weight: 700;
                color: #444444;
                font-size: 20px;
                line-height: 29.9px;

                width: 650px;
                height: 76px;
                background-color: #F9C8C8;
                display: flex;
                align-item: center;
                padding-top: 10px;
                padding-left: 30px;
                border-radius: 10px;
                margin-top: 20px;


            `}>
                <img src={frown} css={css`
                    padding-top: 22px;
                    padding-right: 10px;
                    width: 24px;
                    height: 24px;
                `} />
                <p>{props.text}</p>
            </div>
        )
    } else if(props.type === "warning"){
        return(
            <div css={css`
                font: Kanit;
                font-weight: 700;
                color: #444444;
                font-size: 20px;
                line-height: 29.9px;

                width: 650px;
                height: 76px;
                background-color: #F9D9C8;
                display: flex;
                align-item: center;
                padding-top: 10px;
                padding-left: 30px;
                border-radius: 10px;
                margin-top: 20px;
            `}>
                <img src={alert} css={css`
                    padding-top: 22px;
                    padding-right: 10px;
                    width: 24px;
                    height: 24px;
                `} />
                <p>{props.text}</p>
            </div>
        )
    } else if(props.type === "info"){
        return(
            <div css={css`
                font: Kanit;
                font-weight: 700;
                color: #444444;
                font-size: 20px;
                line-height: 29.9px;

                width: 650px;
                height: 76px;
                background-color: #F9EBC8;
                display: flex;
                align-item: center;
                padding-top: 10px;
                padding-left: 30px;
                border-radius: 10px;
                margin-top: 20px;
            `}>
                <img src={circle} css={css`
                    padding-top: 22px;
                    padding-right: 10px;
                    width: 24px;
                    height: 24px;
                `} />
                <p>{props.text}</p>
            </div>
        )
    } else if(props.type === "success"){
        return(
            <div css={css`
                font: Kanit;
                font-weight: 700;
                color: #444444;
                font-size: 20px;
                line-height: 29.9px;

                width: 650px;
                height: 76px;
                background-color: #CEF7CD;
                display: flex;
                align-item: center;
                padding-top: 10px;
                padding-left: 30px;
                border-radius: 10px;
                margin-top: 20px;
            `}>
                <img src={check} css={css`
                    padding-top: 22px;
                    padding-right: 10px;
                    width: 24px;
                    height: 24px;
                `} />
                <p>{props.text}</p>
            </div>
        )
    }

    return(
        <div>
            <p>{props.text}</p>
        </div>
    )
}

export default Alert;