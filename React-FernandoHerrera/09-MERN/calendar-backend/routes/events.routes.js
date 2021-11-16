/*
    Events Routes
    host + /api/events
*/
const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events.controller");
const { isDate } = require("../helpers/isDate");
const validateMiddleware = require("../middlewares/validate.middleware");
const validateJWT = require("../middlewares/validateJwt.middleware");

//protege todas las rutas que estén después de él. Funciona para aplicar cualquier otro middleware
router.use(validateJWT);

router.get("/", getEvents);

router.post(
    "/",
    [
        check("title", "Title is required").not().isEmpty(),
        check("start", "Start Date is required and should be a valid date").custom(isDate),
        check("end", "End Date is required and should be a valid date").custom(isDate),
        validateMiddleware,
    ],
    createEvent
);

router.put(
    "/:id",
    [
        check("title", "Title is required").not().isEmpty(),
        check("start", "Start Date is required and should be a valid date").custom(isDate),
        check("end", "End Date is required and should be a valid date").custom(isDate),
        validateMiddleware,
    ],
    updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;
