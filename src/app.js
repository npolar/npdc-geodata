'use strict';

var npdcCommon = require('npdc-common');
var AutoConfig = npdcCommon.AutoConfig;

var angular = require('angular');

var npdcGeodataApp = angular.module('npdcGeodataApp', ['npdcUi']);

npdcGeodataApp.controller('GeodataShowController', require('./show/GeodataShowController'));

// Bootstrap ngResource models using NpolarApiResource
var resources = [];

resources.forEach(service => {
  // Expressive DI syntax is needed here
  npdcGeodataApp.factory(service.resource, ['NpolarApiResource', function (NpolarApiResource) {
    return NpolarApiResource.resource(service);
  }]);
});

// Routing
npdcGeodataApp.config(require('./router'));

// API HTTP interceptor
npdcGeodataApp.config($httpProvider => {
  $httpProvider.interceptors.push('npolarApiInterceptor');
});

// Inject npolarApiConfig and run
npdcGeodataApp.run(function(npolarApiConfig, npdcAppConfig){
  var environment = "production";
  var autoconfig = new AutoConfig(environment);
  angular.extend(npolarApiConfig, autoconfig);

  npdcAppConfig.cardTitle = 'Map Data and Services';
  npdcAppConfig.toolbarTitle = 'Geodata';

  console.log("npolarApiConfig", npolarApiConfig);
});
