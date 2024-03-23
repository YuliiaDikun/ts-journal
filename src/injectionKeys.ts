import type { InjectionKey } from 'vue';
import type User from './types/User';
const userInjectionKey = Symbol() as InjectionKey<User>;

export default userInjectionKey;