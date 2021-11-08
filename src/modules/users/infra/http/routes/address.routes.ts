import { Router } from 'express';

import AddressService from '@modules/users/services/CreateAddressService';

const addressRouter = Router();

addressRouter.post('/', async (request, response) => {

    try{
        const {street, number, city, state, country} = request.body;

        const addressService = new AddressService();

        const address = addressService.execute({
            street,
            number,
            city,
            state,
            country,
        });

        return response.json(address);
    }
    catch(err){
        return response.status(400).json({ Error: (err as Error).message})
    }

});

export default addressRouter;
