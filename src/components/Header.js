import Button from "./Button"
import PropTypes from 'prop-types'


const Header = ({ title, onAdd, setAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} text={setAdd ? 'Close' : 'Add'} color={setAdd ? 'grey' : 'steelblue'} />
    </header>
  )
}

Header.defaultProps = {
  title : 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
