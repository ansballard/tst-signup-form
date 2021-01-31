import { css } from "@emotion/css";

export const main = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const invalidStyle = css`
  color: red;
`;

export const validStyle = css`
  color: green;
`;

export const form = css`
  min-width: 400px;

  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  label {
    flex: 2;
  }
  input, button {
    flex: 1;
    width: 125px;
    padding: 5px 7px;
  }
  input[type="text"], input[type="password"] {
    border-radius: 3px;
    border-style: solid;
  }
  button {
    background-color: transparent;
    text-align: center;
    border-style: solid;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 10%);
    }
  }
`;

export const header = css`

`;