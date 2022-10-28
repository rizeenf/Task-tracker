import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

  return (
    <>
    <button onClick={onClick} className='btn' style={{ backgroundColor:color }} >{text}</button>
    </>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Add'
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}


export default Button