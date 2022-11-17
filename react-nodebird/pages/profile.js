
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForms from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [{ nickname: "Not Zerocho" }, { nickname: "Nomad Coder" }, { nickname: "Nico!!" }];
  const followingList = [{ nickname: "제로초보단" }, { nickname: "노마드코더" }, { nickname: "니꼬!!" }];

  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForms />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </AppLayout>
  );
};

export default Profile; 