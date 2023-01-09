import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import TypeWriter from "./TypeWriter/TypeWriter";

export default function Profile() {
  return (
    <div
      id="profile"
      className="flex relative text-white justify-center gap-24 items-center w-screen h-screen"
    >
      <ProfileText />
      <ProfileImg />
      <TypeWriter />
    </div>
  );
}
