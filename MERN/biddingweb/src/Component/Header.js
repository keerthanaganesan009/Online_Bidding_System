import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './Header.css'
import Home from './Home';
import Bid from './Bid';
import EntryForm from './EntryForm';
import Category from './Category';
function Header(props){
     //console.log(props.cproduct);
    function insertProduct(products,file)
    {
        console.log(products);
        props.insertToDB(products,file)
    }
    function searchcat(category){
        //console.log(category);
        props.sprocat(category);
    }
    return(
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/activelis">Active Listining</Link></li>
                <li><Link to="/createlis">Create Listining</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/activelis' element={<Bid pro={props.pro}/>}></Route>
                <Route exact path='/createlis' element={<EntryForm setBidp={insertProduct}/>}></Route>
                <Route exact path='/category' element={<Category setCat={searchcat} cproduct={props.cproduct}/>}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Header;