import { feeService } from "../services/fee.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";

export const feeController = {
  createStructure: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await feeService.createStructure(req.body), "Fee structure created", 201);
  }),

  recordPayment: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await feeService.recordPayment(req.body), "Payment recorded", 201);
  }),

  paymentHistory: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(
      res,
      await feeService.paymentHistory(Number(req.params.studentId)),
      "Payment history",
    );
  }),

  outstanding: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(
      res,
      await feeService.outstandingFees(Number(req.params.studentId)),
      "Outstanding fees",
    );
  }),

  monthlyReport: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(
      res,
      await feeService.monthlyReport(Number(req.query.month), Number(req.query.year)),
      "Monthly fee report",
    );
  }),
};
