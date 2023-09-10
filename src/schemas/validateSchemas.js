import joi from 'joi'

export const passengersSchemas = joi.object(
    {
        firstName: joi.string().min(2).max(100).required(),
        lastName: joi.string().min(2).max(100).required()
    }
)

export const citiesSchemas = joi.object(
    {
        name: joi.string().required().min(2).max(50)
    }
)

export const flightsSchemas = joi.object(
    {
        origin: joi.number().required(),
        destination: joi.number().required(),
        date: joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required(),
    }
)

export const travelsSchemas = joi.object(
    {
        passengerId: joi.number().required(),
        flightId: joi.number().required()
    }
)