import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAddToggle, showAddTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                text = {showAddTask ? 'Close' : 'Add'} 
                color = {showAddTask ? 'red' : 'green'}
                onAddToggle = {onAddToggle}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task-Scheduler',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header;