import {useState} from 'react';

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    //function to handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Add a task first');
            return;
        }
        onAddTask({
            text, day, reminder
        });
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>

            <div className='form-control'>
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder='Your Task'
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                    type="text" 
                    placeholder='Day & Time'
                    value = {day}
                    onChange = {(e) => setDay(e.target.value)}
                />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type="checkbox" 
                    value = {reminder}
                    onChange = {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value = 'Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask;