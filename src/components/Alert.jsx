// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import alertTriangle from "../assets/alertTriangle.svg";
import alertCircle from "../assets/alertCircle.svg";
import checkCircle from "../assets/checkCircle.svg";

export function Alert(props) {
  let icon = "";
  let textAlert = "";
  let style = "";
  if (props.type === "error") {
    icon = frown;
    textAlert = "This is error alert box";
    style = "background: #F9C8C8";
  } else if (props.type === "warning") {
    icon = alertTriangle;
    textAlert = "This is warning alert box";
    style = "background: #F9D9C8";
  } else if (props.type === "info") {
    icon = alertCircle;
    textAlert = "This is info alert box";
    style = "background: #F9EBC8";
  } else if (props.type === "success") {
    icon = checkCircle;
    textAlert = "This is success alert box";
    style = "background: #CEF7CD";
  }
  return (
    <div
      css={css`
        display: flex;
        padding: 16px;
        margin: 10px;
        justify-content: flex-start;
        align-items: center;
        width: 650px;
        height: 76px;
        background-color: #074ee8;
        border-radius: 10px;
        gap: 10px;
        ${style}
      `}>
      <img src={icon} alt="icon" />
      <div
        css={css`
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          line-height: 29.9px;
          color: black;
        `}>
        {textAlert}
      </div>
    </div>
  );
}
