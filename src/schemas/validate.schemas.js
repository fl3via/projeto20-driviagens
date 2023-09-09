import joi from 'joi'

export const passengersSchemas = joi.object(
    {
        firstName: joi.string().required(),
        lastName: joi.string().required()
    }
)

export const citiesSchemas = joi.object(
    {
        name: joi.string().required()
    }
)

export const flightsSchemas = joi.object(
    {
        origin: joi.number().required(),
        destination: joi.number().required(),
        date: joi.date().format('YYYY-MM-DD').required()
    }
)

export const travelsSchemas = joi.object(
    {
        passengerId: joi.number().required(),
        flightId: joi.number().required()
    }
)