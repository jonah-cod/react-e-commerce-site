import { cars} from '../../components/main/carData'
import { searched } from '../types';


const initialState = {
    searched:[...cars]
}
const addtocartReducer =(state = initialState, {type, payload})=>{
    switch (type) {
        case searched:
            //console.log(state.searched);
            return state.searched.filter(car=> car.name.includes('a'))
            
    
        default:
            return state;
    }
}

export default addtocartReducer;