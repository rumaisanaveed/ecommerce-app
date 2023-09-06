import { Link, useParams } from 'react-router-dom'

const ProductPage = ({ products }) => {
        const { title } = useParams();
        const product = products.find(product => 
            (product.title) === title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

        return (
            <>
                {product && 
                    <main className='product-container'>
                        <section className='product-details-container'>
                            <div className='product-image-container'>
                                <img className="product-img" src={product.image} alt="" />
                            </div>
                            <div className='product-details'>
                                <h1>{product.title}</h1>
                                <h2>{product.price}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                                elit. Provident quis ex officia eveniet at,aliquam rem,
                                libero sequi harum voluptatem perferendis, repudiandae
                                voluptatum dolorum explicabo nulla cupiditate exercitationem
                                neque iusto?</p>
                                <input type="number" placeholder="1"/>
                                <Link to=""><button type='button'>Add to Cart</button></Link>
                            </div>
                        </section>
                    </main>
                }
                {!product && 
                    <main className='product-not-found'>
                        <p className='no-data'>
                            Oops!!! Product Not Found 
                        </p>
                    </main>
                }
            </>
        )
    }

export default ProductPage