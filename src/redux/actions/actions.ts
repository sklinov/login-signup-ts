import { Language } from '../../types/Language'
import { SWITCH_LANGUAGE, LOGIN, SIGNUP } from '../../types/actions'
import { AppActions } from '../../types/actions'
import { Login } from '../../types/Login'
import { SignUp } from '../../types/SignUp'

export const switchLanguage = (language: Language):AppActions => ({
    type: SWITCH_LANGUAGE,
    language 
})

export const login = (login: Login):AppActions => ({
    type: LOGIN,
    login 
})

export const signup = (signup: SignUp):AppActions =>({
    type: SIGNUP,
    signup
})