import Address from '../models/Address';

import { getRepository } from 'typeorm';
import { json } from 'express';

interface Request{
    street: string;
    number: string;
    city: string;
    state: string;
    country: string;
}

class CreateAddressService{

    public async execute({street, number, city, state, country}: Request): Promise<Address | null>{

        const addressRepository = getRepository(Address);

        const newAddress = addressRepository.create({
            street,
            number,
            city,
            state,
            country,
        });

        await addressRepository.save(newAddress);

        return newAddress;
    }
}

export default CreateAddressService;
