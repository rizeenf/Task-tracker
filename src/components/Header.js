import Button from "./Button"
import PropTypes from 'prop-types'


const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('Click',e);
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} />
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
