import { Password } from "../models/password";

export const getHashAlgorithm = (value: string, password: Password) => {
  let hashType = "";
  if (password.md5 === value) {
    hashType = "MD5";
  } else if (password.sha1 === value) {
    hashType = "SHA-1";
  } else if (password.sha256 === value) {
    hashType = "SHA-256";
  } else if (password.sha512 === value) {
    hashType = "SHA-512";
  }

  return hashType;
};
