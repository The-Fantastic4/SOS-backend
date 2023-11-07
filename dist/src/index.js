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
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(registrationRoute_1.default);
const port = process.env.PORT || 4000;
const db = process.env.DB_URL;
mongoose_1.default.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected to MongoDB');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map