import styled from "styled-components";

export const Title = styled.Text`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : null)};
`;
