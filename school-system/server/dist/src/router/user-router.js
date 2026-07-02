import { Router } from "express";
import { allUsers, chanegRole, registerUser, updateUser, userLogin, whoami } from "../controller/user-controller.js";
import { verifyToken } from "../middlewere/Auth.js";
const router = Router();
// create post method
// get list get
// update put or patch
// delete delete
// options loading
router.post("/", registerUser);
router.post("/logins", userLogin);
router.get('/whoami', verifyToken, whoami);
router.put('/:id', verifyToken, updateUser);
router.get('/list', verifyToken, allUsers);
router.patch('/role', verifyToken, chanegRole);
export default router;
//# sourceMappingURL=user-router.js.map