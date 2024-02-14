
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProductsList(props){
    return (
        <>
            <tr className='highlight-row'>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td><Link to={`/product/${props.id}`} className='links'>Detalle</Link></td>
            </tr>
        </>
    )
}

ProductsList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    detail: PropTypes.string
}

export default ProductsList;