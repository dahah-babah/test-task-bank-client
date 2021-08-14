import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from '../redux/reducers/index'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector