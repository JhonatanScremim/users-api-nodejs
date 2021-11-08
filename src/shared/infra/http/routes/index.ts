import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/user.routes';
import addressRouter from '../../../../modules/users/infra/http/routes/address.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/address', addressRouter);

export default routes;

