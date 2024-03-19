


//tạo mới người dùng
const createNewUser = (email, password, Name) => {
    if (!email || !password) {
        res.json({ result: 0, message: "Chưa nhập email hoặc mật khẩu" });
    } else {
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
module.exports = {
    createNewUser
}