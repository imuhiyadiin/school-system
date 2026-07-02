import { parentService, studentService, teacherService } from "../services/person.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
import { getPagination } from "../utils/pagination.js";
const makeController = (service, label) => ({
    create: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await service.create(req.body), `${label} created`, 201);
    }),
    update: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await service.update(Number(req.params.id), req.body), `${label} updated`);
    }),
    delete: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await service.delete(Number(req.params.id)), `${label} deleted`);
    }),
    get: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await service.get(Number(req.params.id)), `${label} fetched`);
    }),
    list: asyncHandler(async (req, res) => {
        requireAdmin(req);
        if (service === studentService) {
            const { page, limit, skip } = getPagination(req);
            return sendSuccess(res, await service.list(page, limit, skip, req.query.search), `${label}s fetched`);
        }
        return sendSuccess(res, await service.list(), `${label}s fetched`);
    }),
});
export const studentController = makeController(studentService, "Student");
export const teacherController = makeController(teacherService, "Teacher");
export const parentController = makeController(parentService, "Parent");
//# sourceMappingURL=person.controller.js.map