import star_icon from '../assets/common/star_icon.svg'
import star_filled_icon from '../assets/common/star_filled_icon.svg'
import more_icon from '../assets/chatbox/more_icon.svg'
import comment_icon from '../assets/chatbox/comment_icon.svg'
import CommentPopUp from './CommentPopUp';
import { useContext } from 'react';
import FavouritesContext from '../context/favorites-context';


const Prompt = (props) => {
    const favCtx = useContext(FavouritesContext)
    
    const handleStarred = () => {
        favCtx.saveFavourite(props.promptID, props.text)
    }
    return(
        <div className={"flex flex-row space-x-4 justify-center align-top p-4 pl-14 " + props.bgColor} >
            <div className='w-full xl:max-w-[55%] lg:max-w-[60%]'>
                <div className='inline-flex  w-full space-x-4 '>
                    <img className='w-9 h-9' src={props.profile_image}/>
                    <p className="text-white  w-full leading-7">{props.text}</p>
                </div>
            </div>
            <div className='flex-shrink-0 inline-flex space-x-4 pr-1 h-fit'>
                <button onClick={handleStarred}>
                    <img className='w-7' src={star_icon}/>
                </button>
                <button onClick={() => props.setShowCommentPopup(true)}>
                    <img className='w-6' src={comment_icon}/>
                </button>
                <button>
                    <img className='w-6' src={more_icon}/>
                </button>
            </div>
            {props.showCommentPopup && <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center'>
                <CommentPopUp 
                    setShowCommentPopup={props.setShowCommentPopup}
                    promptID = {props.promptID}
                    />
            </div>}
        </div>
    );
}

export default Prompt;