var app = angular.module('myApp', []);
app.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
      {
          "name": "Nexus S",
          "snippet": "Fast just got faster with Nexus S."
      },
      {
          "name": "Motorola XOOM™ with Wi-Fi",
          "snippet": "The Next, Next Generation tablet."
      },
      {
          "name": "MOTOROLA XOOM™",
          "snippet": "The Next, Next Generation tablet."
      }
      ,
      {
          "name": "test model",
          "snippet": "The Next, Next Generation tablet."
      }
    ];
});

app.controller('personCtrl', function ($scope,$http)
{
    $scope.firstName = "jone";
    $scope.lastName = "test";
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    }

    $http.get("http://www.w3schools.com/angular/customers.php")
 .success(function (response) { $scope.names = response.records; });

    $scope.mySwitch = true;
});


// app.controller('wcfCtrl', function ($scope,$http)
//    {
//     $http.get("http://localhost:8000/web/MSHL_APS/ICommonData.svc/GetAppealStatisticsCreateBy")
// .success(function(response) {$scope.users = response.records;}
// );
//});