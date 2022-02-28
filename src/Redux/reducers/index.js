const initialState = {
	products:[],
	sales: []
};

function rootReducer (state=initialState, action){
	switch(action.type){
		case 'GET_PRODUCTS':
			return {
				...state, 
				products: action.payload

			};
		case 'GET_SALES':
			return {
				...state,
				sales: action.payload
			}
		default:
			return {...state};
	};
}


export default rootReducer;