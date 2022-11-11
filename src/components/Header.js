import Button from "./Button"
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'


const Header = ({ title, onAdd, setAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button onClick={onAdd} text={setAdd ? 'Close' : 'Add'} color={setAdd ? 'grey' : 'steelblue'} />}
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
