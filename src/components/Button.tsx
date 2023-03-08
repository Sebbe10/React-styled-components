import styled, { keyframes } from "styled-components";

interface IButtonProps {
  bgcolor?: string;
}

const rotation = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

export const Button = styled.button`
  background-color: ${(props: IButtonProps) => props.bgcolor || "white"};
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  animation: ${rotation} 1s linear infinite;
`;

export const SaveButton = styled(Button)`
  background-color: green;
  color: white;
  animation: none;
`;
