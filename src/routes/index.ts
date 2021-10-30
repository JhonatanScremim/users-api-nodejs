import { Router } from 'express';

import usersRouter from './user.routes';
import addressRouter from './address.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/address', addressRouter);

export default routes;

