import React from 'react'
import productService from '../services/product'
import { Link } from 'react-router-dom'

function LastProductInDb() {
    const [products, setProducts] = React.useState([])
    const [detailLastProduct, setProductsDetail] = React.useState([])


    React.useEffect(() => {
        async function getData() {
            const productsResponse = await productService.get()
            
            const lastProduct =  productsResponse.products[productsResponse.products.length - 1]
            const productsDetailResponse = await productService.getById(lastProduct.id)

            setProducts(lastProduct)

            if (productsDetailResponse) {
                setProductsDetail(productsDetailResponse)
              }
        }
        getData()
    }, [])


    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`http://localhost:3000${detailLastProduct.img}`} alt=" img " />
                    </div>
                    <p>Detalle del producto: {detailLastProduct.description}</p>
                    <p>Precio: ${detailLastProduct.price}</p>
                    <p>Para: {detailLastProduct.pet}</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a> */}
                    <Link className="btn btn-danger"  rel="nofollow" to={`/product/${detailLastProduct.id}`}>Detail</Link>

                </div>
            </div>
        </div>
    )
}

export default React.memo(LastProductInDb)