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
    return res.json({result:1,data:user});
}
module.exports = {
    handleHeloworld,
    handleUser,
    handleDB
}