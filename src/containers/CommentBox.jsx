import CommentList from "../components/commentList"
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

    return (
        <>
            <h2>i'm the comment box</h2>
            <CommentList comments={comments}/>
        </>
)

}

export default CommentBox