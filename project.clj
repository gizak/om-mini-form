(defproject om-mini-form "0.1.0-SNAPSHOT"
  :description "Om in-page form component"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371" :scope "provided"]
                 [om "0.8.0-alpha1"]
                 [prismatic/om-tools "0.3.6"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :cljsbuild {:builds [{:source-paths ["src" "example/src"]
                        :compiler {:output-to     "example/js/app.js"
                                   :output-dir    "example/js/cljs"
                                   :source-map    "example/js/app.js.map"
                                   :preamble      ["react/react.min.js"]
                                   :externs       ["react/externs/react.js"]
                                   :optimizations :none
                                   :pretty-print  true}}]})
