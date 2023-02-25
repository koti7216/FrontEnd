import axios from "axios"
import Cookies from "js-cookie";

const baseurl="http://localhost:5000/user/7th";
const userpasswordUrl="http://localhost:5000/user/4th";
const postuser="http://localhost:5000/user/1st";
const getuser="http://localhost:5000/user/3rd";
const getUserByUname="http://localhost:5000/user/6th"
class Uservice {
  sInUser(user1){
   return axios.post(userpasswordUrl,user1,{withCredentials: true},{headers:'Set-Cookie'});
  }
  sUpUser(user1){
    return axios.post(postuser,user1);
  }
  getUser(id){
    return axios.get(getuser+'/'+id,{withCredentials: true},{headers: {Authorization: `Bearer ${Cookies.get("token")}`}})
  }
  getuserByname(uname){
    return axios.post(getUserByUname,uname,{withCredentials: true},{headers:'Set-Cookie'})
  }
  logoutus(){
    return axios.post(baseurl);
  }
   
}

export default new Uservice();