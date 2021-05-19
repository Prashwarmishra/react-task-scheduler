import Task from './Task';

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => {
                return <Task task = {task} key = {task.id}/>
            })}
        </>
    )
}

export default Tasks;