const { Invitado, Persona } = require('../models/index');

module.exports = {

    async allInvitados(req, res) {
        try {
            let Invitados = await Invitado.findAll({
                include: {
                    association: "persona",
                }
            })
            res.json(Invitados);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async createInvitado(req, res) {
        try {
            const { nombre, apellido, direccion, ci, telefono } = req.body;
            const newPersona = await Persona.create({
                nombre,
                apellido,
                direccion,
                ci,
                telefono,
            });

            const newInvitado = await Invitado.create({
                persona_id: newPersona.id,
            })
            let invitado = await Invitado.findOne({
                where: { id: newInvitado.id },
                include: {
                    association: "persona",
                }
            })
            res.json(invitado);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async updateInvitado(req, res) {
        const id = req.params.id;
        try {
            const invitado = await Invitado.findOne({
                attributes: ["persona_id"],
                where: { id },
            })
            await Persona.update(
                req.body,
                { where: { id: invitado.persona_id } }
            )
            const invitadoUpdate = await Invitado.findOne({
                attributes: ["persona_id"],
                where: { id },
                include: {
                    association: "persona",
                }
            })

            res.json(invitadoUpdate)
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async deleteInvitado(req, res) {
        const id = req.params.id;
        try {
            const invitado = await Invitado.destroy({
                where: { id },
            });

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async getInvitado(req, res) {
        const id = req.params.id;
        try {
            const Invitado = await Invitado.findOne({
                attributes: ["persona_id"],
                where: { id },
                include: {
                    association: "persona",
                }
            })

            return res.json(Invitado);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}