var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

myApp.config(function ($routeProvider) {

  $routeProvider

      .when('/', {
        templateUrl: 'pages/main.html',
        controller: function(){}
      })

      .when('/vins', {
        templateUrl: 'pages/vins.html',
        controller: 'WineController'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'WineController'
      })

      .when('/domaine', {
        templateUrl: 'pages/domaine.html',
        controller: 'WineController'
      });

});

myApp.controller('WineController', ['$scope', 'Wine', '$routeParams', function($scope, Wine, $routeParams) {

  $scope.wines = Wine;
  $scope.selectedWine = Wine[0].list[0];

  $scope.selectWine = function(bottle) {
    $scope.selectedWine = bottle;
  };

}]);

myApp.service('Wine', function() {
  return [
    {
      type: 'rouge',
      list: [{
        name: 'MOULIN-A-VENT',
        title: 'MOULIN-A-VENT 2012',
        description: 'Le  "seigneur" des crus du Beaujolais, joliment interprété par Chanson  Père & Fils : Une belle réussite !Ce Moulin-à-Vent vinifié à la bourguignonne, annonce un vin flatteur au nez joliment boisé. Ses arômes mêlant les fruits noirs et les épices se poursuivent en bouche sur des tanins affables, tout en équilibre.  A déguster sans tarder sur une bavette à l’échalote : délicieux !!!',
        image:'/r1.jpg'
      },
        {
          name: 'BEAUNE 1ER CRU CLOS DU ROI',
          title: 'BEAUNE 1ER CRU CLOS DU ROI 2012',
          description: 'Grande pureté aromatique et  fraîcheur vive caractérisent ce Beaune 1er Cru de la Maison Chanson Père et Fils. Des petits fruits rouges (groseille et framboise) sur des notes gourmandes de pain d’épices s’ouvrent au nez et se poursuivent en bouche, pleine de générosité et tout en élégance. La finale, incroyablement longue et solide, achève cette dégustation qui en appelle instantanément une autre !',
          image:'/r2.jpg'
        },
        {
          name: 'GEVREY CHAMBERTIN',
          title: 'GEVREY CHAMBERTIN 2012',
          description: 'Au nez, il se dégage des parfums de violette et des arômes très frais de petits fruits rouges agrémentés de notes d’épices. Généreux et bien équilibré, ce vin d’une belle matière et d’une délicieuse complexité aromatique est souligné par une note minérale très subtile. Le tout sublimé par une agréable persistance tout en fraîcheur… Dégustez-le avec un gibier, vous serez conquis !',
          image:'/r3.jpg'
        },
        {
          name: 'BEAUNE 1ER CRU CLOS DES MOUCHES',
          title: 'BEAUNE 1ER CRU CLOS DES MOUCHES 2008',
          description: 'Séducteur avec ses notes gourmandes de framboises, de fleurs de cerisier sur des notes chocolatées et des parfums d\'épices, ce Beaune 1er cru est d\'une grande classe !! En bouche, les tanins se fondent dans une texture tendre et élégante, une belle persistance sur une note finement cacaotée vient conclure la finale !! Complexe et défintivement stylé, ce superbe Beaune 1er Cru sera à réserver pour les grandes occasions !',
          image:'/r4.jpg'
        },
        {
          name: 'BEAUJOLAIS VILLAGES',
          title: 'BEAUJOLAIS VILLAGES 2011',
          description: 'Une excellente affaire avec le Beaujolais Villages de cette prestigieuse Maison Bourguignonne. Ce millésime 2011 démontre toutes ses qualités de fraîcheur, à travers une souplesse et une générosité des plus agréables. Appelez les copains, préparez le plateau de charcuterie, et n’oubliez pas de sortir le Beaujolais de Chanson. Le rapport qualité-prix vaut le détour.',
          image:'/r5.jpg'
        }]
    }, {
      type: 'blanc',
      list: [{
        name: 'RULLY',
        title: 'RULLY 2013',
        description: 'Cette cuvée dévoile un nez charmeur de fruits à chair blanche (nectarine) et de miel frais, le tout surmonté d’une pointe de minéralité et de notes d\'aubépine. Ferme et velouté en bouche, ce blanc présente un bel équilibre qui se prolonge dans une longue finale à la fraicheur florale. Frais et fruité : un superbe Bourgogne blanc de tous les instants !',
        image:'/b1.jpg'
      },
        {
          name: 'POUILLY FUISSE',
          title: 'POUILLY FUISSE 2013',
          description: 'En plein cœur du Mâconnais, le Domaine Chanson a su tirer le meilleur de ce terroir riche pour offrir un Pouilly-Fuissé racé, typique des vins blancs de cette maison Bourguignonne. Une finale fraîche caractéristique, et de délicats arômes floraux et de pomme verte, on ne peut que succomber à ce délicieux breuvage. Une cuvée séductrice qui sublimera vos moments de convivialité.',
          image:'/b2.jpg'
        },
        {
          name: 'MONTAGNY 1ER CRU',
          title: 'MONTAGNY 1ER CRU 2013',
          description: 'Ce Montagny 1er Cru continue de faire l\'unanimité à la dégustation : équilibré, profond, avec des parfums floraux sur des notes citronnées, l\'acidité est ici parfaitement intégrée. Sa fin de bouche longue et tout en fraîcheur vous donnera à coup sûr envie de vous resservir ! Un Bourgogne blanc de choix qui accompagnera parfaitement poissons et autres crustacés.',
          image:'/b3.jpg'
        },
        {
          name: 'BEAUNE BASTION 1ER CRU',
          title: 'BEAUNE BASTION 1ER CRU 2010',
          description: 'Une cuvée unique, élaborée à partir de plusieurs parcelles de 1er Crus du Domaine Chanson. Ce Beaune-Bastion 2010 est un concentré de complexité, de densité et de pureté. Grâce aux vendanges, réalisées dans des conditions idéales, ce Beaune 1er Cru se distingue par une explosion de fruits rouges et une minéralité savoureuse. Un grand classique de la Maison Chanson.',
          image:'/b4.jpg'
        },
        {
          name: 'PERNAND VERGELESSES 1er CRU EN CARADEUX',
          title: 'PERNAND VERGELESSES 1er CRU EN CARADEUX 2012',
          description: 'De renommée internationale, découvrez le porte-étendard de la Maison Chanson : ce Pernand Vergelesses 1er Cru en Caradeux est d\'un équilibre harmonieux entre un élevage en fût de chêne de 13 mois et la minéralité de son terroir. Séduction garantie par la finale élégante et d\'une  persistance remarquable !',
          image:'/b5.jpg'
        },
        {
          name: 'MEURSAULT 1ER CRU BLAGNY',
          title: 'MEURSAULT 1ER CRU BLAGNY 2007',
          description: 'Les superlatifs ne manquent pas devant ce vin blanc exceptionnel en tout point. Aux confins des Puligny Montrachet 1er Crus, le Meursault Blagny 1er Cru a su développer un caractère unique, faisant de ce vin un ambassadeur de l\'élégance et la délicatesse. En bouche, il offre une structure harmonieuse, du volume, de la finesse...',
          image:'/b6.jpg'
        },
        {
          name: 'CHASSAGNE MONTRACHET 1ER CRU LES CHENEVOTTES',
          title: 'CHASSAGNE MONTRACHET 1ER CRU LES CHENEVOTTES 2011',
          description: 'Ce Chassagne Montrachet 1er Cru à réserver pour les grandes, les très grandes occasions !!  Sur des fragrances florales, des notes citronnées très fraîches étayées par une minéralité subtile et une note vanillée tout en délicatesse, ce Chardonnay s\'avère d\'une amplitude et d\'une densité irréprochable. D\'un bel équilibre et d\'une très belle définition, ce grand blanc au boisé subtil devra se faire accompagner d\'un foie gras poelé ou d\'un plateau de fruits de mer pour en tirer son maximum !!',
          image:'/b7.jpg'
        },
        {
          name: 'BEAUNE 1ER CRU CLOS DES FEVES',
          title: 'BEAUNE 1ER CRU CLOS DES FEVES 2011',
          description: 'Des raisins cueillis à maturité, une vinification et un élevage soignés, Le Clos des Fèves a bénéficié d’un soin de tous les instants. Un travail de qualité qui se ressent dans chaque goutte de cette merveille de délicatesse, de complexité et de profondeur. Nous avons là un Beaune 1er Cru harmonieux et d’une grande pureté.',
          image:'/b8.jpg'
        },
        {
          name: 'BEAUNE 1er CRU CLOS DES MOUCHES BLANC',
          title: 'BEAUNE 1er CRU CLOS DES MOUCHES BLANC 2011',
          description: 'Chanson est l’un des principaux propriétaires de l\'appellation Clos des Mouches avec sa parcelle de 4.5 Hectares. Cette cuvée est une excellente définition de ce célèbre terroir offrant rondeur, acidité harmonieuse et sa belle amplitude. Un foie gras ou des fruits de mer révèleront à merveille les arômes de citron, beurre, miel et son boisé subtil.',
          image:'/b9.jpg'
        },]
    }
  ];
});

myApp.filter('uppercase', function() {
  return function(input) {
    return input.toUpperCase();
  };
});
