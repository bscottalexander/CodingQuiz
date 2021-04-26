import styled from "styled-components";

interface PaddingProps {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const Padding = styled.div`
  padding-left: ${(props: PaddingProps) =>
    props.left ? `${props.left}px` : "unset"};
  padding-right: ${(props: PaddingProps) =>
    props.right ? `${props.right}px` : "unset"};
  padding-top: ${(props: PaddingProps) =>
    props.top ? `${props.top}px` : "unset"};
  padding-bottom: ${(props: PaddingProps) =>
    props.bottom ? `${props.bottom}px` : "unset"};
`;

export default Padding;
