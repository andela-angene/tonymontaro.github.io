const myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', ($scope) => {
  $scope.index = new InvertedIndex();
  $scope.readFile = (fileInput, resolve, reject) => {
    const file = fileInput[0].files[0];
    if (file === undefined) return reject();
    const fileType = /json$/;
    const reader = new FileReader();
    if (!file.type.match(fileType)) {
      console.log('Invalid file type.');
      return reject('Not a JSON file');
    }
    reader.readAsText(file);
    let result;
    reader.onload = () => {
      try {
        result = JSON.parse(reader.result);
      } catch (err) {
        return reject('Invalid JSON file');
      }
      result = InvertedIndex.validateFile(result);
      fileInput.val('');
      if (result) {
        $scope.$apply(() => {
          if (!$scope.index.createIndex(result, file.name)) {
            return reject('File already exists');
          }
        });
        return resolve();
      }
      return reject('Invalid File Format');
    };
  };
  $scope.searchOnEnter = (event, searchKey) => {
    if (event.which === 13 && searchKey) {
      $scope.search(searchKey);
    }
  }
  $scope.verifyWord = (check) => {
    if (check) return 'check-square-o';
    return 'close';
  }
  $scope.showAll = () => {
    $scope.index.showAllFilesSearch = false;
    $scope.index.showAllFiles = true;
  }
  $scope.flash = (message, type) => {
    if (type === 'error') {
      $('.alert-danger').html(message);
      $('.alert-danger').fadeIn().delay(800).slideUp();
      return;
    }
    $('.alert-success').html(message);
    $('.alert-success').fadeIn().delay(800).slideUp();
  }
  $scope.search = (searchKey, filename) => {
    filename = (filename === undefined) ? $('#searchFilename').val() : filename;
    if (filename !== 'all') {
      const result = $scope.index.searchIndex(searchKey, filename);
      if (!result) return console.log('nothing found');
      $scope.index.indexed = result;
      $scope.index.showAllFiles = false;
    } else {
      const result = $scope.index.searchAll(searchKey);
      if (!result) return console.log('nothing found a');
      $scope.index.searchAllResult = result;
      $scope.index.showAllFilesSearch = true;
      $scope.index.showAllFiles = true;
    }
  };
  const fileInput = $('#fileInput');
  fileInput.on('change', () => {
    const promise = new Promise((resolve, reject) => {
      $scope.readFile(fileInput, resolve, reject);
    });
    promise.then(() => {
      $('[data-toggle="tooltip"]').tooltip();
      $scope.flash('File added!');
    }, (err) => {
      console.log(err + 'DB');
      $scope.flash(err, 'error');
    });
  });
}]);
$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip();
  $('.show-about').click(() => {
    $('#help').slideUp();
    $('#about').slideToggle();
  });
  $('.show-help').click(() => {
    $('#about').slideUp();
    $('#help').slideToggle();
  });
})
