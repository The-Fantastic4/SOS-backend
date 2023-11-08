"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const registrationRoute_1 = __importDefault(require("./routes/registrationRoute"));
<<<<<<< HEAD
const locationProcessingRoute_1 = __importDefault(require("./routes/locationProcessingRoute"));
=======
const notificationRoute_1 = __importDefault(require("./routes/notificationRoute"));
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(registrationRoute_1.default);
<<<<<<< HEAD
app.use(locationProcessingRoute_1.default);
=======
app.use(notificationRoute_1.default);
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
const port = process.env.PORT || 4000;
const db = process.env.DB_URL;
mongoose_1.default.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to MongoDB');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map