import Task from './Task';

const Tasks = ({ tasks, onDelete, onDblClick }) => {
    
    return (
        <>
            {tasks.map((task)=> (
                <Task key={task.id} task={task} onDelete={onDelete} onDblClick={onDblClick}/>
            ))}
        </>
    )
}

export default Tasks
