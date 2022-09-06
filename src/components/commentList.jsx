import Comment from "./Comment"




const CommentList = ({comments}) => {

    const commentComponents = comments.map(comment => {
        return (
            <Comment author={comment.author}>
            <q>{comment.text}</q>
            </Comment>
        )
    })

    return (
        <>
        {commentComponents}
        </>
    )};


export default CommentList