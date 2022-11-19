import {createStore}  from 'redux';

const initials={
    userType:"USER",
    catagory:"ALL",
    sortBy:"Default",
    searchValue:"",
    productArray:[],
    isLogged:false,
    productDetail:{},
    quantity:0,
    addressDetail:{},
}

function shopReducer(state=initials,action){

   switch(action.type){

    case 'Admin' : return {...state,userType:"Admin"};
    case 'USER' : return {...state,userType:"USER"};
    case 'setCatagory' : return {...state,catagory:action.payload};
    case 'changeSort' : return {...state,sortBy:action.payload};
    case 'SearchChange' : return {...state,searchValue:action.payload};
    case 'ChangeProduct' : return {...state,productArray:action.payload};
    case 'loginStatus' : return {...state,isLogged:action.payload};
    case 'Updateproduct' : return {...state,productDetail:action.payload};
    case 'updateQuantity' : return {...state,quantity:action.payload};
    case 'Addaddress' : return {...state,addressDetail:action.payload};

    default:return state;
   }

}

export default createStore(shopReducer);
