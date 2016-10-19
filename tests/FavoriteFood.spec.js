
describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter on favorite food correctly', function () {
    var mockedList = [{
      name: 'Derp',
      favoriteFood: 'Chicken'
    }, {
      name: 'Saul',
      favoriteFood: 'Tacos'
    }, {
      name: 'Burp',
      favoriteFood: 'Sushi'
    }];

    var results = $filter('favoriteFood')(mockedList, 'Sushi');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Burp');
  });


});