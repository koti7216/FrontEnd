import axios from "axios"


const userpasswordUrl="http://localhost:5000/user/4th";
const postuser="http://localhost:5000/user/1st";
const getuser="http://localhost:5000/user/3rd";
const getUserByUname="http://localhost:5000/user/6th"
class Uservice {
  sInUser(user1){
   return axios.post(userpasswordUrl,user1,{withCredentials: true});
  }
  sUpUser(user1){
    return axios.post(postuser,user1);
  }
  getUser(id){
    return axios.get(getuser+'/'+id)
  }
  getuserByname(uname){
    return axios.post(getUserByUname,uname)
  }
   
}

export default new Uservice();