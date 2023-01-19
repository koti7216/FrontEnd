import {useParams,useNavigate,useLocation} from 'react-router-dom'
const navRout=WrappedComponent=>props=>{
    const useNav=useNavigate();
    const useParms=useParams();
    const location=useLocation();
    return( <WrappedComponent
           {...props}
           useNav={useNav}
           useParams={useParms}
           location={location}
           />);
};
export default navRout;