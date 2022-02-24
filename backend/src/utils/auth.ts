import * as jwt from "jsonwebtoken";

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
    throw new Error("No token found");
  }
}
