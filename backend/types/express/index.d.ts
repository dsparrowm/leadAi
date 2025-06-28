import { User } from "../src/models/prisma";
import { JwtPayload } from "jsonwebtoken";

// You can adjust the type of user as needed (e.g., JwtPayload, or your own User type)
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | User | any;
        }
    }
}

export { };
