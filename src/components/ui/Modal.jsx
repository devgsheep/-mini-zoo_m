import styled from "@emotion/styled";
import colors from "../../styles/colors";

function Modal({ children }) {
  // js 자리
  const Overlay = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 99999;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  `;
  const ModalBox = styled.div`
    width: 286px;
    height: auto;
    background-color: ${colors.white};
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 27px;
  `;
  // jsx 자리
  return (
    <Overlay>
      <ModalBox>{children}</ModalBox>
    </Overlay>
  );
}

export default Modal;
