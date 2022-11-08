import{
    MdCheckBoxOutlineBlank,
    MdCheckBox, //eslint-disable-line
    MdRemoveCircle,
} from 'react-icons/md';
import cn from 'classnames'; //eslint-disable-line
import './TodoListItem.scss';

 //eslint-disable-line
const TodoListItem=({todo,onRemove, onToggle})=> //eslint-disable-line
    {
        const{id, text, checked}=todo; //eslint-disable-line
    
    return (
        <div className = "TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={()=>onToggle(id)}> 
                {checked ? <MdCheckBox />:<MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircle />
            </div>  
        </div>
    );
    };


export default TodoListItem;