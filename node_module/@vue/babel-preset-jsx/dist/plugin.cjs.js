"use strict";function _interopDefault(a){return a&&"object"==typeof a&&"default"in a?a["default"]:a}var babelPluginTransformVueJsx=_interopDefault(require("@vue/babel-plugin-transform-vue-jsx")),babelSugarFunctionalVue=_interopDefault(require("@vue/babel-sugar-functional-vue")),babelSugarInjectH=_interopDefault(require("@vue/babel-sugar-inject-h")),babelSugarVModel=_interopDefault(require("@vue/babel-sugar-v-model")),babelSugarVOn=_interopDefault(require("@vue/babel-sugar-v-on")),index=(a,{functional:b=!0,injectH:c=!0,vModel:d=!0,vOn:e=!0}={})=>({plugins:[b&&babelSugarFunctionalVue,c&&babelSugarInjectH,d&&babelSugarVModel,e&&babelSugarVOn,babelPluginTransformVueJsx].filter(Boolean)});module.exports=index;
