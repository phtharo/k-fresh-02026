import type { User } from '@models/user';
import { Constants } from '@utilities/constants';
import type { ENV } from '@models/index';
import { readJsonFile } from '@utilities/jsonHandling';

export function loadUserFromJson(env = Constants.ENV): User {
  const normalizedEnv = env.toLowerCase() as ENV;
  return readJsonFile<User>(Constants.USERS_JSON_FILE, normalizedEnv);
}
