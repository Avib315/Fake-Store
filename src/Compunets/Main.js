import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Categories from '../Pages/Categories';
import Prodects from '../Pages/Prodects';
import Item from '../Pages/Item';
import Cart from './Cart';
import LogIn from '../Pages/LogIn';
let isCon = true
export default function Main() {
    const [cartArr, setCartArr] = useState([])
    const [sum, setSum] = useState(0)

    function addToCart(item) {
        const founItem = cartArr.find(val => item.id == val.id)
        if (founItem) {
            setCartArr(cartArr.map(val => val.id == item.id ? { ...val, inCart: val.inCart + 1 } : val))
        }
        else {
            const toCart = { ...item, inCart: 1 }
            setCartArr([...cartArr, toCart])
        }
        let total = sum
        total += item.price
        setSum(Math.round(total))


    }
    function removeFromCart(item) {
        const founItem = cartArr.find(val => item.id == val.id)
        if (founItem.inCart != 1) {
            setCartArr(cartArr.map(val => val.id == item.id ? { ...val, inCart: val.inCart - 1 } : val))
        }
        else {
            setCartArr(cartArr.filter(val => val.id != founItem.id))
        }
        let total = sum
        total -= item.price
        setSum(Math.round(total))


    }

    return (
        <>
            <main>
              { isCon ? <Cart cartArr={cartArr} addToCart={addToCart} removeFromCart={removeFromCart} sum={sum} /> : null }
                <div className='mainDiv'>
                    <div className='gg'>
                        <Routes>
                            <Route path='/' element={<Categories />} />
                            <Route path='/prodects/:name' element={<Prodects addToCart={addToCart} removeFromCart={removeFromCart} />} />
                            <Route path='/item/:id' element={<Item addToCart={addToCart} />} />
                            <Route path='/login' element={<LogIn />} />
                        </Routes>
                    </div>
                </div>
            </main>
        </>
    );
}


