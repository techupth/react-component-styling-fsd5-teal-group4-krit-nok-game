// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  // const primary = "#074EE8";
  // const secondary = "#07A4E8";

  if (props.type === "primary") {
    return (
      <button
        css={css`
          display: flex;
          padding: 0px 16px;
          margin: 10px;
          justify-content: center;
          align-items: center;
          width: 171.19px;
          height: 50px;
          background-color: #074ee8;
          font-family: Sarabun;
          font-size: 16px;
          font-weight: 400;
          border-radius: 4px;
          color: white;
        `}>
        <h2>{props.text}</h2>
      </button>
    );
  } else {
    return (
      <button
        css={css`
          display: flex;
          padding: 0px 16px;
          margin: 10px;
          justify-content: center;
          align-items: center;
          width: 171.19px;
          height: 50px;
          background-color: #07a4e8;
          font-family: Sarabun;
          font-size: 16px;
          font-weight: 400;
          border-radius: 4px;
          color: white;
        `}>
        <h2>{props.text}</h2>
      </button>
    );
  }
  return <button>{props.type}</button>;
}
