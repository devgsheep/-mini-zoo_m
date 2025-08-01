import {
  AlertPopUpBox,
  Button,
  MailCircle,
  Svg,
  Text,
} from "../../../emotions/profile/mail.style";

function Mail({ onClose }) {
  return (
    <>
      <AlertPopUpBox>
        <MailCircle>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
          >
            <path
              d="M17.625 1H3.375C2.06332 1 1 2.06332 1 3.375V12.875C1 14.1867 2.06332 15.25 3.375 15.25H17.625C18.9367 15.25 20 14.1867 20 12.875V3.375C20 2.06332 18.9367 1 17.625 1Z"
              stroke="#247CFF"
              strokeWidth="2"
            />
            <path
              d="M1 4.5625L9.43837 8.78169C9.76802 8.94641 10.1315 9.03217 10.5 9.03217C10.8685 9.03217 11.232 8.94641 11.5616 8.78169L20 4.5625"
              stroke="#247CFF"
              strokeWidth="2"
            />
          </Svg>
        </MailCircle>
        <Text>메일로 임시비밀번호가 발송되었습니다.</Text>
        <Button onClick={onClose}>확인</Button>
      </AlertPopUpBox>
    </>
  );
}

export default Mail;
