(ns fbind.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-mini-form.core :as form]
            [clojure.string :as string]))

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


;; (defn- make-text [s path]
;;   (let [{:keys [label]} (get-in s path)
;;         id (string/join "." (map name path))]
;;     (dom/fieldset
;;      (dom/label {:for id} label)
;;      (dom/input {:name id
;;                  :id id
;;                  :type "text"
;;                  :value (get-in s (conj path :value))
;;                  :on-change (fn [e]
;;                               (om/update! s (conj path :value) (.. e -target -value)))}))))


;; (defn- make-checkbox [s path]
;;   (let [{:keys [options checked label]} (get-in s path)
;;         id (string/join "." (map name path))]
;;     (dom/fieldset {:id id}
;;                   (dom/label label)
;;                   (for [i (range (count options))]
;;                     (let [item-id (str id "." i)]
;;                       (dom/label {:for item-id}
;;                                  (dom/span ((options i) 0))
;;                                  (dom/input {:type "checkbox"
;;                                              :value i
;;                                              :checked (contains? checked i)
;;                                              :id item-id
;;                                              :name item-id
;;                                              :on-change (fn [e]
;;                                                           (let [chk-path (conj path :checked)
;;                                                                 chked (.. e -target -checked)]
;;                                                             (if chked
;;                                                               (om/transact! s chk-path #(conj % i))
;;                                                               (om/transact! s chk-path #(disj % i)))
;;                                                             (om/update! s (conj path :value) (mapv #(((get-in @s (conj path :options)) %) 1)
;;                                                                                                    (get-in @s chk-path)))))})))))))


;; (defn- make-select [s path]
;;   (let [{:keys [options label]} (get-in s path)
;;         id (string/join "." (map name path))]
;;     (dom/fieldset
;;      (dom/label {:for id} label)
;;      (dom/select {:name id
;;                   :id id
;;                   :value (get-in s (conj path :index))
;;                   :on-change (fn [e]
;;                                (let [idx (.. e -target -value)
;;                                      idx-path (conj path :index)
;;                                      val (((get-in @s (conj path :options)) idx) 1)
;;                                      val-path (conj path :value)]
;;                                  (om/update! s val-path val)
;;                                  (om/update! s idx-path idx)))}
;;                  (for [i (range (count options))]
;;                    (dom/option {:value i} ((options i) 0)))))))


;; (defn- make-radio [s path]
;;   (let [{:keys [options checked label]} (get-in s path)
;;         id (string/join "." (map name path))]
;;     (dom/fieldset {:id id}
;;                   (dom/label label)
;;                   (for [i (range (count options))]
;;                     (let [item-id (str id "." i)]
;;                       (dom/label {:for item-id}
;;                                  (dom/span ((options i) 0))
;;                                  (dom/input {:type "radio"
;;                                              :value i
;;                                              :checked (= checked i)
;;                                              :id item-id
;;                                              :name item-id
;;                                              :on-change (fn [e]
;;                                                           (let [chk-path (conj path :checked)]
;;                                                             (om/update! s chk-path i)
;;                                                             (om/update! s (conj path :value) (((get-in @s (conj path :options)) i) 1))))})))))))

;; (def run-once (let [called (atom false)]
;;                 (fn [f]
;;                   (if-not @called
;;                     (do (reset! called true)
;;                         (f))))))

;; (declare extract-form)

;; (defn build-form [s form-path]
;;   (let [ks (keys (get-in s form-path))]
;;     (run-once (fn []
;;                 (let [form (get-in s form-path)]
;;                   (doseq [k (keys form)]
;;                     (let [type (:type (form k))
;;                           path (conj form-path k)
;;                           vpath (conj path :value)
;;                           opt-path (conj path :options)]
;;                       (case type
;;                         :text nil
;;                         :select (om/update! s vpath
;;                                             (((get-in s opt-path)
;;                                               (get-in s (conj path :index))) 1))
;;                         :radio (om/update! s vpath
;;                                            (((get-in s opt-path)
;;                                              (get-in s (conj path :checked))) 1))
;;                         :checkbox (om/update! s vpath
;;                                               (mapv #(((get-in s opt-path) %) 1)
;;                                                     (get-in s (conj path :checked))))))))))

;;     (dom/form {:class "binding-form"
;;                :on-change #()}
;;               (for [k ks]
;;                 (let [path (conj form-path k)
;;                       type (get-in s (conj path :type))]
;;                   (case type
;;                     :text (make-text s path)
;;                     :select (make-select s path)
;;                     :radio (make-radio s path)
;;                     :checkbox (make-checkbox s path)))))))


;; (defn extract-form [s form-path]
;;   (let [ks (keys (get-in s form-path))]
;;     (apply merge
;;            (map #(hash-map %
;;                            (:value (get-in s (conj form-path %))))
;;                 ks))))


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
