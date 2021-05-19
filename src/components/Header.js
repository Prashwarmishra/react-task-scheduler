import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

Header.defaultProps = {
    title: 'Task-Scheduler',
}

Header.propTypes = {
    title: PropTypes.string,
}


export default Header;