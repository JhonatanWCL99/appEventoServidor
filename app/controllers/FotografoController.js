const { Fotografo, Persona } = require('../models/index');

module.exports = {

    async allFotografos(req, res) {
        try {
            let fotografos = await Fotografo.findAll({
                include: {
                    association: "persona",
                }
            })
            res.json(fotografos);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async createFotografo(req, res) {
        try {
            const { nombre, apellido, direccion, ci, telefono } = req.body;
            const newPersona = await Persona.create({
                nombre,
                apellido,
                direccion,
                ci,
                telefono,
            });
            const newFotografo = await Fotografo.create({
                persona_id: newPersona.id
            })
            let fotografo = await Fotografo.findOne({
                where: { id: newFotografo.id },
                include: {
                    association: "persona",
                }
            })
            res.json(fotografo);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async updateFotografo(req, res) {
        const id = req.params.id;
        try {
            const fotografo = await Fotografo.findOne({
                attributes: ["persona_id"],
                where: { id },
            })
            await Persona.update(
                req.body,
                { where: { id: fotografo.persona_id } }
            )
            const fotografoUpdate = await Fotografo.findOne({
                attributes: ["persona_id"],
                where: { id },
                include: {
                    association: "persona",
                }
            })

            res.json(fotografoUpdate)
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async deleteFotografo(req, res) {
        const id = req.params.id;
        try {
            const fotografo = await Fotografo.destroy({
                where: { id },
            });

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    async getFotografo(req, res) {
        const id = req.params.id;
        try {
            const fotografo = await Fotografo.findOne({
                attributes: ["persona_id"],
                where: { id },
                include: {
                    association: "persona",
                }
            })

            return res.json(fotografo);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}