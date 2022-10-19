import {AiFillStar, AiOutlinesStar} from 'react-icons/ai';


const Rating = ({rating, OnClick, style}) => {
    return (
        <>
          
        {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => OnClick(i)} style={style}>
            {rating > i ? (
                <AiFillStar fontSize="15px"/>
            ):(
                <AiOutlinesStar fontSize="15px"/>
            )}
        </span>

          ))} 
       </>
    );
};
 
export default Rating;