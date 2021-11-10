import UserRepository from "@modules/users/repositories/repositories/UserRepository";
import IUserRepository from "@modules/users/repositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
    'UserRepository', UserRepository
);
