'use strict';

// @ngInject

var GeodataShowController = function ($scope) {

  $scope.basemapData = [
    {
      header: 'Svalbard',
      items: [
        {link: 'https://data.npolar.no/dataset/63730e2e-b7a6-4d14-b341-c661ccdc5254', title: 'S1000 Kartdata'  , text: 'Svalbard 1:1 000 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/a23acc28-288b-49ba-ac6d-025d1fdee246', title: 'S250 Kartdata'   , text: 'Svalbard 1:250 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/645336c7-adfe-4d5a-978d-9426fe788ee3', title: 'S100 Kartdata'   , text: 'Svalbard 1:100 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/f8e14c1b-a91b-45db-9a27-7ec652a801c9', title: 'S0 Stedsnavn'    , text: 'Svalbard place names' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/dce53a47-c726-4845-85c3-a65b46fe2fea', title: 'S0 Terrengmodell', text: 'Svalbard digital elevation models' , type: 'Raster'}
      ]
    },
    {
      header: 'Jan Mayen',
      items: [
        {link: 'https://data.npolar.no/dataset/d4b774f2-77b3-4ac2-9f16-520905aecfe8', title: 'J1000 Kartdata'  , text: 'Jan Mayen 1:1 000 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/f16ab884-a66e-453e-be30-70f480da6691', title: 'J100 kartdata'   , text: 'Jan Mayen 1:100 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/3534b12b-cdbb-469e-90ba-b50b797ded36', title: 'J0 Stedsnavn'    , text: 'Jan Mayen place names' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/e2b2417e-9926-4519-b6a9-7eefb3bb1012', title: 'J0 terrengmodell', text: 'Jan Mayen digital elevation model' , type: 'Raster'}
      ]
    },
    {
      header: 'Dronning Maud Land',
      items: [
        {link: 'https://data.npolar.no/dataset/d45274ca-9ab7-43e0-8da5-d59cd7744d37', title: 'D250 Kartdata', text: 'Dronning Maud Land 1:250 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/f41c15a8-da37-417e-b10d-d1b5f6eb1c7c', title: 'D0 Stedsnavn' , text: 'Dronning Maud Land place names' , type: 'Vector'}
      ]
    },
    {
      header: 'Bouvetøya',
      items: [
        {link: 'https://data.npolar.no/dataset/19700322-beab-40e7-b867-c3f0c2756071', title: 'B20 Kartdata'    , text: 'Bouvetøya 1:20 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/baeb9929-cd30-4520-8d5e-2b731f82d351', title: 'B0 Stedsnavn'    , text: 'Bouvetøya place names' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/63eaa452-c264-4bd8-8ebd-97e09e1a5a1a', title: 'B0 Terrengmodell', text: 'Bouvetøya digital elevation model' , type: 'Raster'}
      ]
    },
    {
      header: 'Peter I Øy',
      items: [
        {link: 'https://data.npolar.no/dataset/29105abc-5309-498e-b3fd-e69de6814122', title: 'P50 Kartdata'    , text: 'Peter I Øy 1:50 000 basemap themes' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/fa895997-74d8-490f-ab1d-01349b221b16', title: 'P0 Stedsnavn'    , text: 'Peter I Øy place names' , type: 'Vector'},
        {link: 'https://data.npolar.no/dataset/e4ae1d26-191a-481c-9f6a-c3fbeb752f34', title: 'P0 Terrengmodell', text: 'Peter I Øy digital elevation model' , type: 'Raster'}
      ]
    },
  ];

};

module.exports = GeodataShowController;
