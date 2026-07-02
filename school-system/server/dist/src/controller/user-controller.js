import hashpass from "bcryptjs";
import prisma from "../lib/prisma.js";
import { generateToken } from "../secure/generate-token.js";
const roleTypes = ["ADMIN", "TEACHER", "STUDENT"];
// register user
export const registerUser = async (req, res) => {
    try {
        const { name, password, email } = req.body;
        if (!name || !password || !email) {
            return res.status(400).json({
                message: "complete data name,email and password",
                status: 400,
            });
        }
        const checkEmail = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (checkEmail) {
            return res.status(400).json({
                message: "user email is already exist!..",
                status: 400,
            });
        }
        const passwordHash = hashpass.hashSync(password);
        // create data
        // findFirst where
        // update data where
        // delete where
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: passwordHash,
                role: email === "admin@gmail.com" ? "ADMIN" : "STUDENT",
            },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                role: true,
            },
        });
        res.json({
            message: "user created success ✔️",
            user: newUser,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "server error",
            status: 500,
        });
    }
};
// login user
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "enter your email and password",
                status: 400,
            });
        }
        const user = await prisma.user.findFirst({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({
                message: "wrong credentials!.",
                status: 401,
            });
        }
        const dehashPass = hashpass.compareSync(password, user?.password);
        if (!dehashPass) {
            return res.status(401).json({
                message: "wrong credentials!.",
                status: 401,
            });
        }
        const userData = {
            id: user.id,
            email: user.email,
            fullName: user.name,
            createdAt: user.createdAt,
            role: user.role,
            access_token: generateToken({
                email: user.email,
                id: user.id,
                role: user.role,
            }),
        };
        res.json({
            message: "successfully loged!.",
            user: userData,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "server error",
            status: 500,
        });
    }
};
// whoami
export const whoami = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "unAuthorized!.",
            });
        }
        const user = await prisma.user.findFirst({
            where: { id: req.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        });
        res.json({
            message: "operation success",
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "sever error",
            error,
        });
    }
};
// update user
export const updateUser = async (req, res) => {
    try {
        const { fullname, name } = req.body;
        const id = Number(req.params.id);
        const userName = fullname ?? name;
        if (!userName) {
            return res.status(400).json({
                message: "input user name",
            });
        }
        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: "invalid user id",
            });
        }
        const user = await prisma.user.findFirst({
            where: { id },
        });
        if (!user) {
            return res.status(404).json({
                message: "User Not Found!!!.",
            });
        }
        await prisma.user.update({
            where: {
                id,
            },
            data: {
                name: userName,
            },
        });
        res.json({
            message: "user updated success",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "server error",
        });
    }
};
// get all users
export const allUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json({
            result: [...users],
        });
    }
    catch (error) {
        res.status(500).json({
            message: "server error",
            error,
        });
    }
};
// change role
export const chanegRole = async (req, res) => {
    try {
        const { id, role } = req.body;
        // if (req.user?.role !== "ADMIN") {
        //   return res.status(405).json({
        //     message: "not have permission to change role",
        //   });
        // }
        if (!id || !role) {
            return res.status(400).json({
                message: "complete info",
            });
        }
        const userId = Number(id);
        if (!Number.isInteger(userId) || !roleTypes.includes(role)) {
            return res.status(400).json({
                message: "invalid user id or role",
            });
        }
        const user = await prisma.user.findFirst({
            where: { id: userId },
        });
        if (!user) {
            return res.status(404).json({
                message: "User Not Found",
            });
        }
        const updateRole = await prisma.user.update({
            where: { id: userId },
            data: { role: role },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        });
        res.json({
            message: "user role changed success",
            result: updateRole,
        });
    }
    catch (error) {
        error;
    }
};
//# sourceMappingURL=user-controller.js.map