
import { db } from '../database/connection.database.js'

export async function passengers(req, res) {
    const { firstName, lastName } = req.body
    try {
        if (!firstName || !lastName) {
            return res.status(400).send({ mensagem: 'Campos obrigatórios' })
        
        }


        await db.query(
            `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName]
       )

        res.status(201).send({ message: "E-mail criado com sucesso!" })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function cities(req, res) {
    const { name } = req.body
    try {
        if (!name || name.length < 2 || name.length > 50) {
            return res.status(400).json({ mensagem: 'Insira um nome valido' });
        }

        if (cities.has(name)) {
            return res.status(409).json({ mensagem: 'A cidade já existe.' });
        }

        await db.query(`'SELECT * FROM cities'`)

        res.status(201).send({ message: "E-mail criado com sucesso!" })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function flights(req, res) {
    const { origin, destination, date } = req.body
    try {
        if (!cities.has(origin) || !cities.has(destination)) {
            return res.status(404).send({ mensagem: 'Cidades de origem e/ou destino não encontradas.' })
        }

        if (origin === destination) {
            return res.status(409).json({ mensagem: 'Origem e destino devem ser diferentes.' })
        }

        if (destination <= date) {
            return res.status(422).json({ mensagem: 'A data do voo deve ser maior do que a data atual.' })
        }

        await db.query(`'SELECT * FROM flights WHERE origin = ? AND destination = ? AND date > ?';`)

        return res.status(201).json({ mensagem: 'Voo adicionado com sucesso.' })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

