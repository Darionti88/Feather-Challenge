import { Status } from "@prisma/client";

export enum SelectStatusFilter {
  ALL,
  ACTIVE,
  PENDING,
  CANCELLED,
  DROPPED_OUT,
}
