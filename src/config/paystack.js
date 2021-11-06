import dotEnv from 'dotenv';
dotEnv.config()

export const paystack = (request) => {
    const MySecretKey = `Bearer ${process.env.PAYSTACK_SECRETE}`;

     const initializePayment = (form, mycallback) => {
        const option = {
            url : 'https://api.paystack.co/transaction/initialize',
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           },
           form
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request.post(option,callback);
    }
    const verifyPayment = (ref, mycallback) => {
        const option = {
            url : 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           }
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request(option,callback);
    }
    return {initializePayment, verifyPayment};
}

// export { paystack, initializePayment, verifyPayment}; 