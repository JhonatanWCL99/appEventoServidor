const { Organizador, Persona } = require('../models/index');

module.exports = {

    async allOrganizadores(req, res) {
        try {
            let Organizadores = await Organizador.findAll({
                include: {
                    association: "persona",
                }
            })
            res.json(Organizadores);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async createOrganizador(req, res) {
        try {
            const { nombre, apellido, direccion, ci, telefono, razonSocial } = req.body;
            const newPersona = await Persona.create({
                nombre,
                apellido,
                direccion,
                ci,
                telefono,
            });

            const newOrganizador = await Organizador.create({
                persona_id: newPersona.id,
                razonSocial: razonSocial,
            })
            let organizador = await Organizador.findOne({
                where: { id: newOrganizador.id },
                include: {
                    association: "persona",
                }
            })
            res.json(organizador);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async updateOrganizador(req, res) {
        const id = req.params.id;
        try {
            const organizador = await Organizador.findOne({
                attributes: ["persona_id"],
                where: { id },
            })
            await Persona.update(
                req.body,
                { where: { id: organizador.persona_id } }
            )

            await Organizador.update({
                'razonSocial': req.body.razonSocial,
            }, {
                where: {
                    id: req.params.id
                }
            }

            )
            const OrganizadorUpdate = await Organizador.findOne({
                attributes: ["persona_id"],
                where: { id },
                include: {
                    association: "persona",
                }
            })

            res.json(OrganizadorUpdate)
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async deleteOrganizador(req, res) {
        const id = req.params.id;
        try {
            const organizador = await Organizador.destroy({
                where: { id },
            });

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async getOrganizador(req, res) {
        const id = req.params.id;
        try {
            const Organizador = await Organizador.findOne({
                attributes: ["persona_id"],
                where: { id },
                include: {
                    association: "persona",
                }
            })

            return res.json(Organizador);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}