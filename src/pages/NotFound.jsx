import styled from "@emotion/styled";
import colors from "../styles/colors";

const Container = styled.div`
  width: 100%;
  height: 852px;
  background-color: ${colors.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Not404 = styled.div`
  display: flex;
  color: ${colors.gray[100]};
  font-size: 60px;
  justify-content: center;
  align-items: center;
`;
const NotText = styled.div`
  display: flex;
  color: ${colors.gray[100]};
  font-size: xx-large;
  justify-content: center;
  align-items: center;
`;
function NotFound() {
  return (
    <Container>
      <Not404>404</Not404>
      <NotText>NotFound</NotText>
    </Container>
  );
}

export default NotFound;
