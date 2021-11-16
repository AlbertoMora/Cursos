const Event = require("../models/Event.model");

const getEvents = async (req, res) => {
    const events = await Event.find({}).populate("user", "name");

    res.json({
        ok: true,
        events,
    });
};

const createEvent = async (req, res) => {
    const event = new Event(req.body);

    event.user = req.uid;

    try {
        await event.save();
        const resEvent = await Event.findById(event._id).populate("user", "name");
        res.status(201).json({
            ok: true,
            event: resEvent,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Please contact the support team",
            ok: false,
        });
    }
};

const updateEvent = async (req, res) => {
    const eventId = req.params.id;
    const { uid } = req;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            res.status(404).json({
                ok: false,
                msg: "Event not found",
            });
        } else {
            if (event.user.toString() !== uid) {
                res.status(401).json({
                    ok: false,
                    msg: "Permission Denied",
                });
            } else {
                const updatedData = { ...req.body, user: uid };
                const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedData, { new: true });

                res.json({
                    ok: true,
                    event: updatedEvent,
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Please contact the support team",
            ok: false,
        });
    }
};

const deleteEvent = async (req, res) => {
    const eventId = req.params.id;
    const { uid } = req;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            res.status(404).json({
                ok: false,
                msg: "Event not found",
            });
        } else {
            if (event.user.toString() !== uid) {
                res.status(401).json({
                    ok: false,
                    msg: "Permission Denied",
                });
            } else {
                await Event.findByIdAndDelete(eventId);

                res.json({
                    ok: true,
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Please contact the support team",
            ok: false,
        });
    }
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
};
