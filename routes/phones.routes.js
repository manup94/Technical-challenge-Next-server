const router = require("express").Router();
const phonesData = require('../phones.json')



router.get("/getAllPhones", (req, res, next) => {
  res.json(phonesData);
});

router.get('/getPhone/:id', (req, res, next) => {
  const { id } = req.params
  const phoneId = Number(id)

  const phone = phonesData.find(phone => phone.id === phoneId)
  res.json(phone)
})


module.exports = router;
