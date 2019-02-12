import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em 0em;
  border: 1px solid #BB3A3A;
  &:focus {
    outline: none !important;
    border-color: #BB3A3A;
    box-shadow: 0 0 10px #BB3A3A;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
`;
