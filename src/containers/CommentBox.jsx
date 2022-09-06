import CommentList from "../components/commentList";
import CommentForm from "../components/CommentForm";
import {useState} from "react";

const CommentBox = () => {

    const [comments, setComments] = useState(
        [
            {
                id:1,
                author: 'rick',
                text:'beep boop'
            },
            {
                id:2,
                author: ' morty',
                text: ' doopy poomp'
            },
            {
                id:3,
                author: 'summer',
                text: 'wawaweewa'
            }
        ]
    )

    const addComment = () => {
        //addComment()
        ev.preventDefault();
        console.log('addComment called')
    }

    return (
        <>
            <h2><CommentForm onCommentSubmit={addComment}/></h2>
            <CommentList comments={comments}/>
        </>
)

}

export default CommentBox