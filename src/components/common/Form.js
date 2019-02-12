import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em 0em;
  border: 1px solid #154360;
  text-align: center;

  &:focus {
    outline: none !important;
    border-color: #154360;
    box-shadow: 0 0 10px #154360;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
`;
