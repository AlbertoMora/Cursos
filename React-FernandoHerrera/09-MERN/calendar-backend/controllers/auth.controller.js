const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const { generateJWT } = require("../helpers/jwt");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({
                ok: false,
                msg: "User or Password doesn't match U",
            });
        } else {
            const isPassValid = bcrypt.compareSync(password, user.password);

            if (!isPassValid) {
                res.status(400).json({
                    ok: false,
                    msg: "User or Password doesn't match P",
                });
            } else {
                const token = await generateJWT(user.id, user.name);

                res.status(202).json({
                    user: {
                        uid: user.id,
                        name: user.name,
                    },
                    token,
                    ok: true,
                });
            }
        }
    } catch (e) {
        console.log(err);
        res.status(500).json({
            msg: "Please contact the support team",
            ok: false,
        });
    }
};

const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({
                ok: false,
                msg: "Duplicated user",
            });
        } else {
            user = new User(req.body);

            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(password, salt);

            await user.save();
            const token = await generateJWT(user.id, user.name);

            res.status(201).json({
                user: {
                    uid: user.id,
                    name: user.name,
                },
                token,
                ok: true,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Please contact the support team",
            ok: false,
        });
    }
};

const renewToken = async (req, res) => {
    const { uid, name } = req;

    const token = await generateJWT(uid, name);

    res.status(200).json({
        user: {
            uid: uid,
            name: name,
        },
        token,
        ok: true,
    });
};

module.exports = {
    login,
    register,
    renewToken,
};
