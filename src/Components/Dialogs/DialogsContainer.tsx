import React, {FC} from 'react';
import classes from './Dialogs.module.css'
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {initialStateType} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {getUserProfileAC, setUserProfileAC} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {RootReducerType} from "../../redux/redux-store";


type DialogsContainerType = {
   dialogsPage: DialogsPageType
}

let mapStateToProps = (state: RootReducerType): DialogsContainerType => {
   return {
      dialogsPage: state.dialogsPage,
   }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      updateNewMessageBodyAC: (body: string) => {
         dispatch(updateNewMessageBodyAC(body))
      },
      sendMessageAC: () => {
         dispatch(sendMessageAC())
      }
   }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer