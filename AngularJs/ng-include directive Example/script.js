var myApp = angular.module("myModule", [])
                   .controller("myController",function($scope) {
                       var employees = [
                           { Name: "Ben Jule", Gender: "Male", Salary: 25000, City: "London" },
                           { Name: "Julie Parse", Gender: "Female", Salary: 65000, City: "USA" },
                           { Name: "Sara Mark", Gender: "Female", Salary: 89000, City: "Hyderabad" },
                           { Name: "Todd Nail", Gender: "Male", Salary: 78000, City: "London" },
                           { Name: "Vanch Hump", Gender: "Male", Salary: 45000, City: "Chennai" }
                       ];

                       $scope.employees = employees;
                       $scope.employeeView = "EmployeeTable.html";
});