import bcrypt from 'bcrypt';
import User from '../models/User';
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
    if (!email || !password) {
        res.json({ result: 0, message: "Chưa nhập email hoặc mật khẩu" });
    } else {
        if(!isEmailValid(email)){
            res.json({result:0, message:"nhập sai email!!"});
        }else{
            User.findOne({ Email: email })
            .then((data) => {
                if (data != null) {
                    res.json({ result: 0, message: "Tài khoản bị trùng" });
                } else {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, function (err, hash) {
                            if (err) {
                                res.json({ result: 0, message: "Mã hóa mật khẩu không thành công" })
                            } else {
                                const user = new User({
                                    Email: email,
                                    Name: Name,
                                    Password: hash,
                                    Createday: Date.now()
                                })
                                user.save()
                                    .then((data) => {
                                        res.json({ result: 1, message: "save successfull!!", data: data });
                                    })
                                    .catch((err) => {
                                        res.json({ result: 0, message: "save faled!!", err: err });
                                    })
                            }
                        });
                    });
                }
            })
            .catch((err) => {
                res.json({ result: 0, message: "Tìm thất bại", err: err });
            })
        }
    }
    return User;
}

module.exports = {
    handleHeloworld,
    handleUser,
    handleDB,
    handleCreateUser
}

// check email
function isEmailValid(email) {
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}