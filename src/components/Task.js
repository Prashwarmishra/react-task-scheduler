const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <i className="fas fa-times" 
                    style = {{color: 'red', cursor: 'pointer'}}
                    onClick = {() => {
                        onDelete(task.id);
                    }}    
                ></i>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;