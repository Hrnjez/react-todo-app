import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={{color: '#11998e'}}>{title}</h1>
            {location.pathname === '/react-todo-app' && (<Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracer',
}
Header.propTypes = {
    title: PropTypes.string,
}

export default Header
