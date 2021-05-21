import PropTypes from 'prop-types';

const Button = ({text, color, onAddToggle}) => {

    return (
        <button 
            style = {{ background: color }} 
            className = 'btn' 
            onClick = {onAddToggle}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Button;