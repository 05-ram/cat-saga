import { all } from "redux-saga/effects"
import watchCatSaga from "./catSaga"

const rootSaga = function* () {
    yield all([watchCatSaga()])
}

export default rootSaga;