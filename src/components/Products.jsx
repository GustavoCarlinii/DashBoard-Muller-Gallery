import React from 'react'

import productService from '../services/product'



//Importar nuestro componente
import ProductsList from './ProductsList'

class Products extends React.Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const productsResponse = await productService.get()
        const { products } = productsResponse
        try {
            if (products) {
                this.setState({ products })
            } 

        } catch (error) {
            console.log(err)
        }



    }



    render() {
        return (
            <div style={{'padding': '10px'}}>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">Productos Existentes</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map((product, index) => {
                                            return <ProductsList  {...product} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products