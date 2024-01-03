import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 200px;
  border: 1px solid #e4e9f0;
  border-radius: 10px;
  padding: 10px 15px;
  &:focus {
    outline: 1px solid #e4e9f0;
  }
`
