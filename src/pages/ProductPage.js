import { useParams } from 'react-router-dom';
import InputBtn from '../components/buttons/InputBtn';
import AddToCartBtn from '../components/buttons/AddToCartBtn';
import SuccessMsg from '../components/SuccessMsg';
import { useState } from 'react';

const ProductPage = ({ 
            products,
            productCount,
            setProductCount,
            cartItemsCount,
            setCartItemsCount,
            isAddToCart,
            setIsAddToCart
        }) => {

        const { title } = useParams();
        const product = products.find(product => 
            (product.title) === title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

        const additionalClass = isAddToCart ? 'product-details-container-additional' : '';
        const [ cartItems, setCartItems ] = useState([]);
        const [ noOfCartItems, setNoOfCartItems ] = useState(0);

        return (
            <>
                {product && 
                    <main className='product-container'>
                        {
                            isAddToCart && 
                            <SuccessMsg 
                                productCount={productCount}
                                productName={product.title}
                            />
                        }
                        <section className={`product-details-container ${additionalClass}`}>
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
                                <div className='btns-container'>
                                    <InputBtn productCount={productCount} setProductCount={setProductCount}/>
                                    <AddToCartBtn 
                                      product={product}
                                      cartItems={cartItems}
                                      setCartItems={setCartItems}
                                      cartItemsCount={cartItemsCount}
                                      setCartItemsCount={setCartItemsCount}
                                      isAddToCart={isAddToCart}
                                      setIsAddToCart={setIsAddToCart}
                                      productCount={productCount}
                                      noOfCartItems={noOfCartItems}
                                      setNoOfCartItems={setNoOfCartItems}
                                    />
                                </div>
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