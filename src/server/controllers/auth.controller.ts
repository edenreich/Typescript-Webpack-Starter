import { Context } from "koa";

class AuthController {
    public static async login(ctx: Context): Promise<string> {
        return 'login method!';
    }

    public static async register(ctx: Context): Promise<string> {
        return 'register method!';
    }
}

export = AuthController;