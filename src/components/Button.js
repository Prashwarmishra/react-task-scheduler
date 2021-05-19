import PropTypes from 'prop-types';

const Button = ({text, color}) => {

    return (
        <button style = {{ background: color }} className = 'btn' >
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