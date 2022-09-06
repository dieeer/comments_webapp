import {useState} from 'react';

const CommentForm = ({addComment}) => {

    const [author, setAuthor] = useState('');
    const [text, setText]     = useState('');

    const handleAuthorChange = (ev) => {
        setAuthor(ev.target.value);
    }
    
    const handleTextChange = (ev) => {
        setText(ev.target.value);
    }

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        const comment = {author, text};
        comment.id = Date.now();
        addComment(comment);
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type = "text" placeholder = 'name' value    = {author} onChange = {handleAuthorChange}/>
                <input type = "text" placeholder     = 'comment' value = {text} onChange   = {handleTextChange}/>
                <input type = "submit" value     = "post" />
            </form>
        </>
    )
}

export default CommentForm;