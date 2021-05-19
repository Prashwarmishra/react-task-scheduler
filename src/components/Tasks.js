const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => {
                return <h4 key = {task.id}>{task.text}</h4>
            })}
        </>
    )
}

export default Tasks;