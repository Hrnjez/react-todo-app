import {FaTimes} from 'react-icons/fa';

const Task = ({ task, onDelete, onDblClick }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDblClick(task.id)}> 
            <h3>{task.text} <FaTimes style={{color: '#dd1818', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
            <p  style={{color: '#11998e'}}>{task.day}</p>
        </div>
    )
}

export default Task
