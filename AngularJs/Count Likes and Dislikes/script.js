var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {
        var technologies = [
            { Name: "C#", Likes: 0, Dislikes: 0 },
            { Name: "JavaScript", Likes: 0, Dislikes: 0 },
            { Name: "Asp.Net", Likes: 0, Dislikes: 0 }

        ];
        $scope.technologies = technologies;
    $scope.increamentLikes = function(technology) {
        technology.Likes++;
    }
    $scope.increamentDislikes = function (technology) {
        technology.Dislikes++;
    }
});