import { Role } from "@prisma/client";

export interface MenuItem {
  path: string;
  label: string;
  icon: any;
  allowedRoles?: Role[];
}
