// Auth controller placeholder
import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { loginSchema, registerSchema } from '../schemas/auth.schema';
import { validate } from '../middleware/validateMiddleware';

export const authController = {
    register: validate(registerSchema, async (req: Request, res: Response) => {
        const { email, password, firstName, lastName } = req.body;
        const { user, token } = await authService.register({ email, password, firstName, lastName });
        res.status(201).json({ user, token });
    }),

    login: validate(loginSchema, async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.json({ user, token });
    }),

    logout: async (req: Request, res: Response) => {
        await authService.logout(req.user.id);
        res.status(204).send();
    },

    me: async (req: Request, res: Response) => {
        const user = await authService.getCurrentUser(req.user.id);
        res.json(user);
    },

    refresh: async (req: Request, res: Response) => {
        const token = await authService.refreshToken(req.user.id);
        res.json({ token });
    },
};