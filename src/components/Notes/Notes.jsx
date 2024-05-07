import './Notes.scss';

export function Notes(props)
{
    return(
    <div className='note'>
         <h3 className="note__title">{props.title}</h3>
         <p className="note__content">{props.content}</p>
    </div>
    );
}