import { ProductStatusEnum, } from '@/api/product/product.types'

import { Address, CartProductType, PaymentType, LineItem, LineItemSubscription, ProductEnrollment} from '@/api/cart/cart.types'
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import moment from 'moment'
import _ from 'lodash';
import { EnrollmentType } from '@/api/profile/profile.types';
import { PROFILE_STATUS_ENUM } from '@/api/viewer/viewer.types';

export type CartStateType = {
    error: boolean,
    delivery: string,
    discount: number,
    openmenu: boolean,
    totalQuantity: number,
    clientSecret: string,
    cartProducts: CartProductType[],
    cartEnrollment: EnrollmentType,
    productsEnrollments: ProductEnrollment[],
    titleQuantity: [{
        title: string, quantity: -1
    }],
  
    subtotal: number,
    total: number,
    step: number,
    status: string,
    shipping: number,
    payment: PaymentType,
    open: boolean,
    edit: boolean,
    paymentCard: {
        cardName: string,
        cardNumber: string,
        expDate: string,
        cvv: string,
    },
    deliveryDates: {
        startDate: string,
        endDate: string
    },
    
    orderComplete: boolean,
    deliveryAddress: Address,
    valid: boolean, 
    sessionId: string
    sessionIdUrl: {sessionId:string, url:string}
    lineItemsSubscription:LineItemSubscription[],
    lineItems: LineItem[],
    cartId:string,
}


const initialCartState: CartStateType = {
    error: false,
    cartId:'',
    delivery: 'free',
    discount: -1,
    openmenu: false,
    edit: false,
    totalQuantity: -1,
    clientSecret: '',
    productsEnrollments:[{ 
        id: '',
        created: '',
        description: '',
        name: '',
        amount: -1,
        priceId: '',
            }],
    cartEnrollment: {
        title: '',
        name: '',
        collaboratorEmail: '',
        collaboratorId: '',
        status: PROFILE_STATUS_ENUM.USER,
        token: '',
        flag: '',
        uid: '',
        price: -1,
        priceId: '',
        startDate: '',
        endDate: '',
        payment: PaymentType.cart,},
    cartProducts: [{
        title: '',
        price: -1,
        description: '',
        shipping:-1,
        titleSlug:'',
        discount: 0,
        promo: -1,
        image: '',
        productStatus: ProductStatusEnum.FRONT,
        quantity: 0,
        stock: -1
    }, /* {
            description: "popcorn 'mais' 1€/ 500g",
            discount: 25,
            image: "https://res.cloudinary.com/liismaiil/image/upload/v1683728989/lami1a/avatar/1683728988825.jpg", price: 1,
            productStatus: "VRAC",
            promo: 0,
            quantity: 1,
            selection: "dates-nuts-and-dries",
            stock: 100,
            title: "popcorn",
            author: 'kazdhicham@gmail.com',
            titleSlug: "popcorn"
        } */],
    titleQuantity: [{
        title: '', quantity: -1
    }],
    lineItemsSubscription:[{
        quantity: -1,
        price:''
    }],
    lineItems:[{
        quantity: -1,
        price_data: {
        product_data: {
        name: '',
        description: '',
        images: ['']
        },
        unit_amount: -1,
        currency: '',
        }
        
    }],
    subtotal: -1,
    total: 0,
    step: 0,
    status: 'FRO',
    shipping: 0,
    payment: PaymentType.cart,
    open: false,
    paymentCard: {
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
    },
    deliveryDates: {
        startDate: moment().add(2, 'days').toISOString(),
        endDate: moment().add(7, 'days').toISOString()
    },
    orderComplete: false ,
    deliveryAddress: {name: '', destination: '', building: '', street: '',
        city: '', state: '', contact: '',
        country: '', zip: '', isdefault: false,
    },
    valid: false,
    sessionId: '',
    sessionIdUrl:{sessionId: '', url:''}
}

const mapItem = (item: any, payload: any) => {
    if (item.titleSlug === payload.product.titleSlug) { return { ...item, quantity: payload.quantity } }
    return item
}
const updateMapItem = (item: any, payload: any) => {
    if (item.id === payload.id) { return { ...item, quantity: payload.quantity } }
    return item
}
/* const filterItem = (item: any, product: any) => item.titleSlug !== product.titleSlug
 */
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action: PayloadAction<{ product: CartProductType }>) {
            if (state?.cartProducts && state?.cartProducts.length === 1 && state?.cartProducts[0]["quantity"] === 0) {
                console.log({ ...action.payload.product, quantity: 1 })
                state.cartProducts = [{ ...action.payload.product, quantity: 1 }]
            }

            const itemFound = _.find(state.cartProducts, (item: CartProductType) => item.titleSlug === action.payload?.product.titleSlug)
            console.log({ itemFound })
            if (itemFound) {
                state.cartProducts = state?.cartProducts?.map((item: any) => mapItem(item, action.payload))
            }
            else {
                state.cartProducts = state.cartProducts.concat({ ...action.payload.product })
            }
        },
        removeFromCart(state, action: PayloadAction<{ titleSlug: string }>) {
            state.cartProducts = state?.cartProducts?.filter((item: any) => item.titleSlug !== action.payload.titleSlug)
        },
        updateCart(state, action: PayloadAction<{ id: string, quantity: number }>) {
            state.cartProducts = state?.cartProducts?.map((item: any) => updateMapItem(item, action.payload))
        },
        setLineItemsSubscription(state, 
            action: PayloadAction<{ line_items:LineItemSubscription[] }>) {
            state.lineItemsSubscription = action.payload.line_items

        },
        setLineItems(state, 
            action: PayloadAction<{ line_items:[LineItem] }>) {
            state.lineItems = action.payload.line_items

        },
        resetCart(state) {
            state.cartProducts = [{
                title: '',
                price: -1,
                shipping:-1,
                titleSlug:'',
                description: '',
                discount: -1,
                promo: -1,
                image: '',
                productStatus: ProductStatusEnum.FRONT,
                quantity: -1, stock: -1
            }]
        },

        resetCartEnrollment(state) {
            state.cartEnrollment = initialCartState.cartEnrollment
        },
        setDeliveryAddress(state, action: PayloadAction<{ address: Address }>) {
            state.deliveryAddress = action.payload.address

        },
        setClientSecret(state, action: PayloadAction<{ secret: string }>) {
            state.clientSecret = action.payload.secret
        },

        setSessionId(state, action: PayloadAction<{ sessionId: string }>) {
            state.sessionId = action.payload.sessionId
        },
        setCartId(state, action: PayloadAction<{ cartId: string }>) {
            state.cartId = action.payload.cartId
        },
        setSessionIdUrl(state, action: PayloadAction<{ sessionId: string, url: string }>) {
            state.sessionIdUrl = {sessionId:action.payload.sessionId, url:action.payload.url}
        },

        resetDeliveryAddress(state) {
            state.deliveryAddress = initialCartState.deliveryAddress

        },
        setCartProducts(state, action: PayloadAction<{ cartProducts: CartProductType[] }>) {
            state.cartProducts = action.payload.cartProducts
        },
        setCartEnrollment(state, action: PayloadAction<{ enrollment: EnrollmentType }>) {
            state.cartEnrollment = action.payload.enrollment
        },
        setProductsEnrollments(state, action: PayloadAction<{ productsEnrollments: ProductEnrollment[] }>) {
            state.productsEnrollments = action.payload.productsEnrollments
        },
        setDelivery(state, action: PayloadAction<{ delivery: string }>) {
            state.delivery = action.payload.delivery
        },
        setPayment(state, action: PayloadAction<{ payment: PaymentType }>) {
            state.payment = action.payload.payment
        },
        
        setDiscount(state) {
            state.discount = 25
        },
        setEdit(state) {
            state.edit = true
        },

        setCloseEdit(state) {
            state.edit = false
        },

        setDeliveryDates(state, action: PayloadAction<{
            dates: {
                startDate: string, endDate: string
            }
        }>) {
            state.deliveryDates = action.payload.dates
        },

        setSubtotal(state, action: PayloadAction<{ subtotal: number }>) {

            state.subtotal = action.payload.subtotal
        },
        setTotalQuantity(state, action: PayloadAction<{ totalQuantity: number }>) {
            state.totalQuantity = action.payload.totalQuantity
        },
        setTotal(state, action: PayloadAction<{ total: number }>) {
            state.total = action.payload.total
        },


        setComplete(state, action: PayloadAction<{ complete: boolean }>) {
           console.log({complete:action.payload.complete})
            state.orderComplete = action.payload.complete 
        },
        updateProductQuantity(state, action: PayloadAction<{
            titleSlug: string, quantity: number
        }>) {
            const newProducts = current(state).cartProducts.map((prod: CartProductType) => {
                if (prod.titleSlug === action.payload.titleSlug) {
                    prod.quantity = action.payload.quantity
                }
                return prod
            })

            state.cartProducts = [...newProducts]
        },
        setStep(state, action: PayloadAction<{ step: number }>) {
            state.step = action.payload.step
        },

        setBackStep(state) {
            state.step = state.step - 1
        },
        setShippingCharge(state, action: PayloadAction<{ charge: number }>) {
            state.shipping = action.payload.charge
        },
      
        setPaymentCard(state, action: PayloadAction<{
            card: {
                cardName: string, cardNumber: string, cvv: string, expDate: string
            }
        }>) {
            state.paymentCard = action.payload.card
        }


    }
})
export const cartActions = cartSlice.actions
export default cartSlice.reducer
