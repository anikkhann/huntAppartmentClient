import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingBasket, faPlus, faHome} from '@fortawesome/free-solid-svg-icons';
import List from '../List/List';
import MyRent from '../MyRent/MyRent';
import AddRent from '../AddRent/AddRent';


const Sidebar = ({setDisplay}) => {

    const addRent = <AddRent />
    const list = <List />
    const myRent = <MyRent />

    return (
        <aside>
            <div className="d-flex flex-md-column py-5 pl-2 pl-sm-4 pl-lg-5 align-items-start">
                
                <div>
                    <button onClick={() => setDisplay(list)}  className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />My List
                        </span>
                    </button>
                    <button onClick={() => setDisplay(addRent)} className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />Add Rent House
                        </span>
                    </button>
                    <button onClick={() => setDisplay(myRent)} className="my-3 btn d-md-block">
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />MyRent
                        </span>
                    </button>
                </div>
                 
            </div>
        </aside>
    );
};

export default Sidebar;