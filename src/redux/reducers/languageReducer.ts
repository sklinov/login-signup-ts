import { SWITCH_LANGUAGE, SwitchLanguageAction } from "../../types/actions";
import { Language } from "../../types/Language";

const initialState:Language[] = [] //{ language: 'ru'};

export default languageReducer(state = initialState, action: SwitchLanguageAction):Language => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        // default:
        //     return state;
    }

}