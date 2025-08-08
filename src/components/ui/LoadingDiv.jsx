import styled from "@emotion/styled";
import { FadeLoader } from "react-spinners";
const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadingDiv() {
  return (
    <Loading>
      <FadeLoader
        color="#8AB9FF"
        loading
        margin={4}
        radius={2}
        speedMultiplier={1.3}
      />
    </Loading>
  );
}

export default LoadingDiv;
