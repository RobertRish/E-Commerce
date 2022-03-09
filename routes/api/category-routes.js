const router = require('express').Router();
const { Category, Product } = require('../../models');


// GET all categories
router.get('/', (req, res) => {
    Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET category by id
router.get('/:id', (req, res) => {
    Category.findOne({
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
      .then(dbCategoryData => {
        console.log(dbCategoryData); 
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No Category found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// CREATE category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//UPDATES category
router.put('/:id', (req, res) => {
    Category.update(
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
    Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
