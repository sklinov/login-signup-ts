import { Login } from "./Login"
import { SignUp } from "./SignUp"
import { Language } from "./Language"

export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE"
export const LOGIN = "LOGIN"
export const SIGNUP = "SIGNUP"

export interface SwitchLanguageAction {
    type: typeof SWITCH_LANGUAGE,
    language: Language
}

export interface LoginAction {
    type: typeof LOGIN,
    login: Login
}

export interface SignUpAction {
    type: typeof SIGNUP,
    signup: SignUp
}

export type AppActions = SwitchLanguageAction | LoginAction | SignUpAction
