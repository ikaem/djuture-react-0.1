export const exchangeStateReducer = (state, action) => {
    switch(action.type) {
        case "cash": 
            const oldState = {...state};
            return {...oldState, cash: action.payload}
        case "cashAmount":
            return { ...state, cashAmount: action.payload}
        case "name":
            const itemsWChndName = [...state.exchangeItems]
            itemsWChndName[action.exchangeId].name = action.payload;
            return {...state, exchangeItems: itemsWChndName };
        case "description":
            const itemsWChndDescription = [...state.exchangeItems]
            itemsWChndDescription[action.exchangeId].description = action.payload;
            return {...state, exchangeItems: itemsWChndDescription };
        case "photo1": 
            const photosWChangedPhoto1 = {...state.exchangeItems[action.exchangeId].photos, photo1: action.payload}
            const exchangeItemsWPhotos1 = [...state.exchangeItems]
            exchangeItemsWPhotos1[action.exchangeId].photos = photosWChangedPhoto1;
            return {...state, exchangeItems: exchangeItemsWPhotos1};
        case "photo2": 
            const photosWChangedPhoto2 = {...state.exchangeItems[action.exchangeId].photos, photo2: action.payload}
            const exchangeItemsWPhotos2 = [...state.exchangeItems]
            exchangeItemsWPhotos2[action.exchangeId].photos = photosWChangedPhoto2;
            return {...state, exchangeItems: exchangeItemsWPhotos2};
        case "add form": 
            const newExchange = {name: "", description: "", photos: {photo1: "", photo2: ""}}
            const newState = {...state, exchangeItems: [...state.exchangeItems, newExchange]}
            return newState;
        case "delivery":
            return {...state, delivery: action.payload}
        default: 
            return state;
    }
}