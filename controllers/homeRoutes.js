const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
    }
});


router.get('/dashboard', async (req, res) => {
    try {
        req.session.user_id = 1;
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Tour, include: { model: User, attributes: { exclude: ['password'] }, through: { attributes: [] } }, through: { attributes: [] } }]
        });

        const user = userData.get({ plain: true });
        // console.log(user);
        // console.log(user.tours[0].users);
        const tourData = await Tour.findAll({
            where: { host_id: req.session.user_id },
            include: [{ model: User, attributes: { exclude: ['password'] }, through: { attributes: [] } }],
        });
        const toursArr = tourData.map(tour => tour.get({ plain: true }))
        // console.log(toursArr);


        req.session.save(() => {
            req.session.user_id = 1;
            req.session.logged_in = true;

            res.render('dashboard', {
                user, toursArr,
                logged_in: req.session.logged_in
            })
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/my/profile', async (req, res) => {
    res.render('myProfile')
})
module.exports = router;





