import {useState} from "react";
import {get} from "lodash";

import store from "../../store";
import id from "../../data/lang/id";
import en from "../../data/lang/en";

const localeData = {id, en};

const Translator = ({id = null}) => {
  const [activeLocale, setActiveLocale] = useState(store.getState().reducerLocale.locale);
  store.subscribe(() => {
    setActiveLocale(store.getState().reducerLocale.locale);
  });
  return get(localeData[activeLocale], id) || id;
};

export default Translator