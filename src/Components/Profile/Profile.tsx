import React, {FC} from "react";
import classes from './Profile.module.css'
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
   profile: any
   status: string
   updateStatus: (status: string) => void
}

const Profile: FC<ProfileType> = ({ ...props}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
         <MyPostsContainer />
      </div>
   );
};

export {Profile};
