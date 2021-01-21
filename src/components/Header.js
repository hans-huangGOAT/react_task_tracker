// The convention for naming components is uppercase the first letter.
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    testing: 'Test default props',
  }


  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

// CSS in Js
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }

export default Header
