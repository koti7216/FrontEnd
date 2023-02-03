import {useParams,useNavigate,useLocation} from 'react-router-dom'
import { useCookies } from 'react-cookie';
const navRout=WrappedComponent=>props=>{
    const useNav=useNavigate();
    const useParms=useParams();
    const location=useLocation();
    const cookie=useCookies("token");
    return( <WrappedComponent
           {...props}
           useNav={useNav}
           useParams={useParms}
           location={location}
           cookie={cookie}
           />);
};
export default navRout;