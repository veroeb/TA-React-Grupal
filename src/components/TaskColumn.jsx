import Task from './Task';
function TaskColumn( { status, tasks } ) {
    return (
        <div className='task-column'>
            <h1>{status}</h1>
            {tasks.length > 0 ? (
                tasks.map((task) => <Task key={task.id} task={task} />)
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default TaskColumn;