import styled from "styled-components";

interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer = styled.div`
  min-height: ${(props: SpacerProps) =>
    props.height !== undefined ? `${props.height}px` : "unset"};
  min-width: ${(props: SpacerProps) =>
    props.width !== undefined ? `${props.width}px` : "unset"};
`;

export default Spacer;
