import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map((task) => {
                return <Task 
                    task = {task} 
                    key = {task.id}
                    onDelete = {onDelete}
                />
            })}
        </>
    )
}

export default Tasks;