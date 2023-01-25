import axios from "axios"


const userpasswordUrl="http://jtechie.us-east-1.elasticbeanstalk.com/user/4th";
const postuser="http://jtechie.us-east-1.elasticbeanstalk.com/user/1st";
const getuser="http://jtechie.us-east-1.elasticbeanstalk.com/user/3rd";
const getUserByUname="http://jtechie.us-east-1.elasticbeanstalk.com/user/6th"
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
  getuserByname(uname){
    return axios.post(getUserByUname,uname)
  }
   
}

export default new Uservice();