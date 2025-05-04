import express from 'express';
const router = express.Router();
import client from '../configs/client.json' assert { type: 'json' };

router.get('/:slug', (req, res) => {
  const slug = req.params.slug;
  const clientData  = client[slug];

  if (!clientData) {
    return res.status(404).json({ error: 'Cliente no encontrado' });
  }

  res.json(clientData); // Devuelve los datos sin token
});

export default router;