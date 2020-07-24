import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: Array<string | string[]>) => SetMetadata('roles', roles);