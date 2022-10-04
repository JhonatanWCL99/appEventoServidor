const express = require('express');
const router = express.Router();

// Importar controladores
const OrganizadorController = require('./controllers/OrganizadorController');
const FotografoController = require('./controllers/FotografoController');
const AuthController = require('./controllers/AuthController');
const InvitadoController = require('./controllers/InvitadoController');

// Home
router.get('/', (req, res) => res.json({ foo: "bar" }));

//Auth
router.post('/api/auth/signin', AuthController.signIn);
router.post('/api/auth/signup', AuthController.signUp);

// Fotografos
router.get('/api/fotografos/listarFotografos', FotografoController.allFotografos);
router.post('/api/fotografos/crearFotografo', FotografoController.createFotografo);
router.put('/api/fotografos/updateFotografo/:id', FotografoController.updateFotografo);
router.delete('/api/fotografos/deleteFotografo/:id', FotografoController.deleteFotografo);
router.get("/api/fotografos/getFotografo/:id", FotografoController.getFotografo);

// Organizadores
router.get('/api/organizadores/listarOrganizadores', OrganizadorController.allOrganizadores);
router.post('/api/organizadores/crearOrganizador', OrganizadorController.createOrganizador);
router.put('/api/organizadores/updateOrganizador/:id', OrganizadorController.updateOrganizador);
router.delete('/api/organizadores/deleteOrganizador/:id', OrganizadorController.deleteOrganizador);
router.get("/api/organizadores/getOrganizador/:id", OrganizadorController.getOrganizador);

// Invitados
router.get('/api/invitados/listarInvitados', InvitadoController.allInvitados);
router.post('/api/invitados/crearInvitado', InvitadoController.createInvitado);
router.put('/api/invitados/updateInvitado/:id', InvitadoController.updateInvitado);
router.delete('/api/invitados/deleteInvitado/:id', InvitadoController.deleteInvitado);
router.get("/api/invitados/getInvitado/:id", InvitadoController.getInvitado);


module.exports = router;