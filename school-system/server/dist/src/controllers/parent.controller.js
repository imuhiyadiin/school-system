import { parentService } from "../services/person.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
export const parentController = {
    create: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await parentService.create(req.body), "Parent created", 201);
    }),
    update: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await parentService.update(Number(req.params.id), req.body), "Parent updated");
    }),
    delete: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await parentService.delete(Number(req.params.id)), "Parent deleted");
    }),
    get: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await parentService.get(Number(req.params.id)), "Parent fetched");
    }),
    list: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await parentService.list(), "Parents fetched");
    }),
};
//# sourceMappingURL=parent.controller.js.map