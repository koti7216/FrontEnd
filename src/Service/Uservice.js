import axios from "axios"


const userpasswordUrl="http://localhost:8090/user/4th";
const postuser="http://localhost:8090/user/1st";
const getuser="http://localhost:8090/user/3rd"
class Uservice {
  sInUser(user1){
   return axios.post(userpasswordUrl,user1);
  }
  sUpUser(user1){
    return axios.post(postuser,user1);
  }
  getUser(id){
    return axios.get(getuser+'/'+id)
  }
   
}

export default new Uservice();