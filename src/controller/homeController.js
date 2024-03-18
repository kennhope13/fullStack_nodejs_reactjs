const User = require('../models/User');

const handleHeloworld = (req, res) => {
    return res.render("home.ejs");
}

const handleUser = (req, res) => {
    return res.render("user.ejs")
}

const handleDB = (req, res) => {
    const user = new User({
        Email: "tien@gmailcom",
        Name: "tien",
        Password: "123456",
        Createday: Date.now()
    })
    user.save().then(() => { console.log("luu  thanh cong"); })
        .catch((err) => { console.log(err); })
    return res.json({ result: 1, data: user });
}

const handleCreateUser = (req, res) => {
    var email = req.body.email;
    var Name = req.body.name;
    var password = req.body.password;
    const user = new User({
        Email: email,
        Name: Name,
        Password: password,
        Createday: Date.now()
    })
    return user.save()
        .then((data) => {
            res.json({ result: 1, message: "save successfull!!", data: data });
        })
        .catch((err) => {
            res.json({ result: 0, message: "save faled!!", err: err });
        })
}

module.exports = {
    handleHeloworld,
    handleUser,
    handleDB,
    handleCreateUser
}