(ns om-mini-form.example.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-mini-form.core :as form]))

(defonce app-state (atom {:headline "Om In-page Form Binding Demo"
                          :form {:text-field {:value "This is text"
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
                                 :radio-field {:checked 0
                                               :label "Radio Field"
                                               :options [["radio 1" #(print 1)]
                                                         ["radio 2" #(print 2)]
                                                         ["radio 3" #(print 3)]]
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
