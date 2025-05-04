const express = require('express');
const router = express.Router();
const client = require('../configs/clientes.json');

router.get('/:slug', (req, res) => {
  const slug = req.params.slug;
  const client = client[slug];

  if (!client) {
    return res.status(404).json({ error: 'Cliente no encontrado' });
  }

  res.json(client); // Devuelve los datos sin token
});

module.exports = router;