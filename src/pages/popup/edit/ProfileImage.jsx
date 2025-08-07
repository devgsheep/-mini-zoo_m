import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atoms/userInfoAtom";
import {
  AlertPopUpBox,
  Button,
  ImageGroup,
  Img,
  ProfileImgEdit,
  Title,
} from "../../../emotions/edit/profileimage.style";

function ProfileImage({ onClose }) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  // 이미지 추가

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      const updatedUser = { ...userInfo, thumbnail_img: imageURL };
      setUserInfo(updatedUser);
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      onClose();
    }
  };
  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <Title>프로필 이미지 변경</Title>
        <form>
          <ImageGroup>
            <input
              type="file"
              accept="image/*"
              id="photo-upload"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="photo-upload">
              <Img
                src={userInfo.thumbnail_img || "/images/guest_img.png"}
                alt="프로필이미지변경"
                style={{ cursor: "pointer", width: 100, height: 100 }}
              />
              <ProfileImgEdit />
            </label>
          </ImageGroup>
          <Button>확인</Button>
        </form>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default ProfileImage;
