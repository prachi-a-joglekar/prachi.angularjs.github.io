(function () {
    
    angular.module('LunchCheck', [])    
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        
        $scope.checkIfTooMuch = function(){
           console.log($scope.lunchmenu);
           $scope.customStyle = {};
           $scope.result="";
           var lunchmenu  = $scope.lunchmenu;
           if (undefined == lunchmenu || lunchmenu == ""){
            $scope.result = "Please enter data first";
            $scope.customStyle.colorClass = "red";

           }else{
                
                var menuItems = lunchmenu.split(',');

                var filtered = menuItems.filter(function (el) {
                    return el != null && el != '' && el != undefined;
                  });
                                  
                var len =  filtered.length;
                if (len==0){
                    $scope.result = "Please enter data first";
                    $scope.customStyle.colorClass = "red";
                }else if (len<=3){
                    $scope.result = "Enjoy";
                    $scope.customStyle.colorClass = "green";
                }else{
                    $scope.result = "Too much!";
                    $scope.customStyle.colorClass = "green";
                }
            }

        };
        
    };    
 
}());
    