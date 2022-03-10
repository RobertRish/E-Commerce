const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

router.get('/', (req, res) => {
    Tag.findAll()
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['product_name']
        }
      ]
    })
      .then(dbTagData => {
        if (!dbTagData) {
          res.status(404).json({ message: 'No Category found with this id' });
          return;
        }
        res.json(dbTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// CREATE tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// UPDATE tag
router.put('/:id', (req, res) => {
    Tag.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbTagData => {
        if (!dbTagData) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(dbTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // DELETES tag
router.delete('/:id', (req, res) => {
    Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;