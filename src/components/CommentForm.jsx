import {useState} from 'react';

const CommentForm = () => {

    const [author, setAuthor] = useState('');
    const [text, setText]     = useState('');

    const handleAuthorChange = (ev) => {
        setAuthor(ev.target.value);
    }
    
    const handleTextChange = (ev) => {
        setText(ev.target.value);
    }

    return (
        <>
            <form>
                <input type = "text" placeholder = 'name' value    = {author} onChange = {handleAuthorChange}/>
                <input type = "text" name        = 'comment' value = {text} onChange   = {handleTextChange}/>
                <input type = "submit" value     = "post" />
            </form>
        </>
    )
}

export default CommentForm;