import classes from './users.module.css'
import {UserPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

export const Users = (props: UserPropsType) => {
   if (props.usersPage.users.length === 0) {
      // props.setUsers(
      //    [
      //       {
      //          id: 1,
      //          followed: false,
      //          fullName: 'Ramzam',
      //          status: "i'm read a book right now",
      //          location: {city: 'Elin-Yurt', country: 'Chechnya'},
      //          photoUrl: 'https://res.cloudinary.com/teepublic/image/private/s--Ua7Qlme9--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1608081374/production/designs/17423652_0.jpg'
      //       },
      //       {
      //          id: 2,
      //          followed: true,
      //          fullName: 'Isreal',
      //          status: "i'm sleeping...",
      //          location: {city: 'Pyatigorsk', country: 'Russia'},
      //          photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKhU0_c75ezqKMR9p0sjOtBlC5SM606TEBdGTaR3h4EK7pzER2ViQeBW1nl7Rn-X9sXQ&usqp=CAU"
      //       },
      //       {
      //          id: 3,
      //          followed: false,
      //          fullName: 'Muhammad',
      //          status: "i'm going to on my work",
      //          location: {city: 'Grozny', country: 'Chechnya'},
      //          photoUrl: "data:image/jpeg;base64,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",
      //       }
      //    ]
      // )

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            props.setUsers(response.data.items)
         })
   }

   return (
      <div>
         {
            props.usersPage.users.map(u => {
               return (
                  <div key={u.id}>
                     <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={classes.usersPhoto}/></div>
                        <div>
                           {u.followed
                              ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                              : <button onClick={() => props.follow(u.id)}>Follow</button>
                           }

                        </div>
                     </span>
                     <span>
                        <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                     </span>
                  </div>
               )
            })
         }
      </div>
   );
};
