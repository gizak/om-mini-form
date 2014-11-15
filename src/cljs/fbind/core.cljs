(ns fbind.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-mini-form.core :as form]
            [clojure.string :as string]))

(defonce app-state (atom {:headline "Om In-page Form Binding Demo"
                          :form {:text-field {:value 1234
                                              :label "Text"
                                              :type :text}
                                 :select-field {:index 0
                                                :options [["option 1" "first"]
                                                          ["option 2" "second"]
                                                          ["option 3" "third"]]
                                                :label "Select"
                                                :type :select}
                                 :checkbox-field {:checked #{}
                                                  :label "Checkbox Field"
                                                  :options [["chkbox 1" 1]
                                                            ["chkbox 2" 2]
                                                            ["chkbox 3" 3]]
                                                  :type :checkbox}
                                 :textarea-field {:value "[1 2"
                                                  :label "Textarea"
                                                  :type :textarea}
                                 :radio-field {:checked 0
                                               :label "Radio Field"
                                               :options [["radio 1" true]
                                                         ["radio 2" false]
                                                         ["radio 3" true]]
                                               :type :radio}}
                          :claims "Copyleft"
                          :display [[:form :text-field]
                                    [:form :select-field]]}))


(defn main []
  (om/root
   (fn [app owner]
     (reify
       om/IRenderState
       (render-state [_ s]
         (dom/div
          (dom/h3 (:headline app))
          (form/build app [:form])))))
   app-state
   {:target (. js/document (getElementById "app"))}))
