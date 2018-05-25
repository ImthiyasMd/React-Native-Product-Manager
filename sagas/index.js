import productWatchers from "./product";
import searchWatchers from "./search";

export default function* rootWatchers() {
    yield [productWatchers()]
    //yield [productWatchers()]
}