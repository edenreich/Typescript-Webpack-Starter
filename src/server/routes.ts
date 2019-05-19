
import Router from 'koa-router';
import AuthController from './controllers/auth.controller';

const router: Router = new Router();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

export = router;
