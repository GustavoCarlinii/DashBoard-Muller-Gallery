import React  from 'react';
import productService from '../services/product'
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const {id} = useParams();

    const [product,setProduct] = React.useState({});

    React.useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await productService.getById(id);
        setProduct(data);
    };

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Producto: {product.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`http://localhost:3000${product.img}`} alt=" image " />
                    </div>
                    <p>Nombre del producto: {product.name}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Descripcion: {product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail