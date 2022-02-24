import * as jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";

export const APP_SECRET = "opwiejflmnsnddsdfdfds";

export interface AuthTokenPayload {
  userId: number;
}

export function decodeToken(token: string) {
  try {
    if (token) {
      return jwt.verify(token, APP_SECRET);
    }
    return null;
  } catch (err) {
    throw new AuthenticationError("No token found");
  }
}
