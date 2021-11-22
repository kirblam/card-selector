import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Search' } onClick={onAdd} /> */}

    </header>

  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired, 
}

export default Header
